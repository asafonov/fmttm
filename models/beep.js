class Beep {
  constructor (sound) {
    this.audio = new Audio(sound);
  }

  play() {
    this.audio.play();
  }

  destroy() {
    this.audio = null;
  }
}
