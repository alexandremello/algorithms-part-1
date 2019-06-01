class UF {
  constructor(objectCount) {
    this.objectCount = objectCount
    this.connections = new Array(this.objectCount)
    for (let i = 0; i < this.objectCount; i++) {
      this.connections[i] = i
    }
  }

  union(p, q) {
    this.connections[p] = q
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
