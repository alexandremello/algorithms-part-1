class UF {
  constructor(objectCount) {
    this.objectCount = objectCount
    this.connections = new Array(this.objectCount)
    for (let i = 0; i < this.objectCount; i++) {
      this.connections[i] = i
    }
  }

  union(p, q) {
    const qGroup = this.connections[q]
    const pGroup = this.connections[p]
    this.connections[p] = qGroup
    this.connections.forEach((value, index, array) => {
      if (value === pGroup) array[index] = qGroup
    })

    return this.connections
  }

  connected(p, q) {
    return this.connections[p] === this.connections[q]
  }
}

module.exports.UF = UF;
