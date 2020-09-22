class Beep {
  constructor (sound, id) {
    this.audio = new Audio(sound);
    this.id = id || Date.now();
  }

  play() {
    alert(this.id);
    this.audio.play();
  }

  destroy() {
    this.audio = null;
    this.id = null;
  }
}
