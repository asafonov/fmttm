class AbstractSet {
  constructor (data) {
    this.beeps = {};
    this.length = 0;

    for (let k in data) {
      if (this.beeps[k] === null || this.beeps[k] === undefined) {
        ++this.length;
      }

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
