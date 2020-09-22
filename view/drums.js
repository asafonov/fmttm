class DrumsView {
  constructor (model) {
    this.model = model;
    this.element = document.querySelector('.scene');
    this.onDrumClickedProxy = this.onDrumClicked.bind(this);
    this.init();
  }

  init() {
    const cnt = this.model.length;
    const hcnt = cnt % 2 == 0 ? cnt / 2 : (cnt + 1) / 2;
    const itemWidth = (this.element.offsetWidth - asafonov.settings.drumMargin * (hcnt + 1)) / hcnt;
    const itemHeight = (this.element.offsetHeight - asafonov.settings.drumMargin * 3) / 2;

    for (let k in this.model.beeps) {
      const item = document.createElement('div');
      item.className = 'drum';
      item.setAttribute('data-name', k);
      item.style.margin = asafonov.settings.drumMargin + 'px';
      item.style.width = itemWidth + 'px';
      item.style.height = itemHeight + 'px';
      this.element.appendChild(item);
      item.addEventListener('click', this.onDrumClickedProxy);
    }
  }

  onDrumClicked (e) {
    const name = e.target.getAttribute('data-name');
    asafonov.messageBus.send(asafonov.events.BEEP, {name: name});
  }

  destroy() {
    this.model = null;
    const items = this.element.querySelectorAll('.drum');

    for (let i = 0; i < items.length; ++i) {
      items[i].removeEventListener('click', this.onDrumClickedProxy);
    }

    this.element.innerHTML = '';
    this.element = null;
  }
}
