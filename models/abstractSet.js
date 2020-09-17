class Set {
  constructor (data) {
    this.data = {};

    for (let k in data) {
      this.data[k] = new Beep(data[k]);
    }
  }

  destroy() {
  }
}
