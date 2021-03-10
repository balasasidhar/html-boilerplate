import template from './template.html';

class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('app-header', Header);
