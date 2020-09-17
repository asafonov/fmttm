class AbstractSet {
  constructor (data) {
    this.beeps = {};

    for (let k in data) {
      this.beeps[k] = new Beep(data[k], k);
    }
  }

  destroy() {
    for (let i in this.data) {
      this.beeps[i].destroy();
      this.beeps[i] = null;
    }

    this.beeps = null;
  }
}
