class Drums extends AbstractSet {
  constructor() {
    const data = {
      Snare: 'sounds/drums/snare.wav',
      Crash: 'sounds/drums/crash.wav',
      HihatClosed: 'sounds/drums/hihat_closed.wav',
      Kick: 'sounds/drums/kick.wav'
    };

    super(data);
  }
}
