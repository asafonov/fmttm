class Beep {
  constructor (sound, id) {
    this.audio = new Audio(sound);
    this.id = id || Date.now();
  }

  play() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.play();
  }

  destroy() {
    this.audio = null;
    this.id = null;
  }
}
