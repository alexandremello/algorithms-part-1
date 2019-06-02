class UF {
  constructor(objectCount) {
    this.objectCount = objectCount
    this.connections = new Array(this.objectCount)
    for (let i = 0; i < this.objectCount; i++) {
      this.connections[i] = i
    }
    this.weights = new Array(this.objectCount)
    for (let i = 0; i < this.objectCount; i++) {
      this.weights[i] = 1
    }
  }

  union(p, q) {
    const pRoot = this.findRoot(p)
    const qRoot = this.findRoot(q)

    if (pRoot === qRoot) return this.connections

    if (this.weights[pRoot] < this.weights[qRoot]) {
      this.connections[pRoot] = qRoot
      this.weights[qRoot] += this.weights[pRoot]
    } else {
      this.connections[qRoot] = pRoot
      this.weights[pRoot] += this.weights[qRoot]
    }

    return this.connections
  }

  connected(p, q) {
    return this.findRoot(p) === this.findRoot(q)
  }

  findRoot(p) {
    if (this.connections[p] === p)
      return p
    else
      return this.findRoot(this.connections[p])
  }
}

module.exports.UF = UF;
