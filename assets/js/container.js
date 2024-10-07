export default class Container {
  constructor(btn, container, close) {
    this.btn = document.querySelector(btn)
    this.container = document.querySelector(container)
    this.close = document.querySelector(close)
  }
  abrir() {
    this.btn.addEventListener('click', () => {
      this.container.classList.add('active')
      this.container.classList.remove('slide-out')
    })
  }
  fechar() {
    this.close.addEventListener('click', () => {
      this.container.classList.toggle('slide-out')
    })
  }
  bindEvents() {
    this.abrir = this.abrir.bind(this)
    this.fechar = this.fechar.bind(this)
  }
  addEvents() {
    this.abrir()
    this.fechar()
  }
  init() {
    this.bindEvents()
    this.addEvents()
    return this
  }
}