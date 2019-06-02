const { UF } = require("./uf")

let uf;
let connections = [
  [4, 3],
  [3, 8],
  [6, 5],
  [9, 4],
  [2, 1],
  [5, 0],
  [7, 2],
]

beforeEach(() => {
  uf = new UF(10)
})

describe("#union", () => {
  test("connects two elements", () => {
    uf.union(4, 3)

    expect(uf.connections[3]).toBe(uf.connections[4])
  })

  test("appends to the connection group", () => {
    uf.union(4, 3)
    uf.union(3, 8)

    expect(uf.connections[3]).toBe(4)
    expect(uf.connections[8]).toBe(4)
  })

  test("updates weights", () => {
    uf.union(4, 3)
    uf.union(3, 8)

    expect(uf.weights[4]).toBe(3)
  })
})

describe("#connected", () => {
  beforeEach(() => {
    connections.forEach(([p, q]) => uf.union(p, q))
  })
  test("is connected", () => {
    expect(uf.connected(4, 3)).toBe(true)
    expect(uf.connected(3, 8)).toBe(true)
    expect(uf.connected(1, 7)).toBe(true)
    expect(uf.connected(8, 9)).toBe(true)
  })

  test("is not connected", () => {
    expect(uf.connected(0, 9)).toBe(false)
    expect(uf.connected(6, 2)).toBe(false)
    expect(uf.connected(7, 3)).toBe(false)
  })
})

describe("#findRoot", () => {
  beforeEach(() => {
   uf.connections = [1, 8, 1, 8, 3, 0, 5, 1, 8, 8]
  })

  test("returns the root node", () => {
    expect(uf.findRoot(3)).toBe(8)
    expect(uf.findRoot(6)).toBe(8)
  })
})
