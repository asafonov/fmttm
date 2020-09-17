class AbstractSetController {
  constructor (model) {
    this.model = new model();
    this.addEventListeners();
  }

  addEventListeners() {
    this.manageEventListeners(true);
  }

  removeEventListeners() {
    this.manageEventListeners(false);
  }

  manageEventListeners (addFlag) {
    asafonov.messageBus[addFlag ? 'subscribe' : 'unsubscribe'](asafonov.events.BEEP, this, 'onBeep');
  }

  onBeep (data) {
    if (this.model.data[data.name] !== null && this.model.data[data.name] !== undefined) {
      this.model.data[data.name].play();
    }
  }

  destroy() {
    this.removeEventListeners();
  }
}
