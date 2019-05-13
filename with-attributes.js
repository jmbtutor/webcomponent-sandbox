import { LitElement, html } from 'lit-element';

class WithAttributes extends LitElement {
  static get properties() {
    return {
      value: { type: String },
      count: { type: Number },
    }
  }

  constructor() {
    super();
    this.value = 'value';
    this.count = 10;
  }

  render() {
    return html`
      <p>value: ${this.value}</p>
      <p>count: ${this.count}</p>
    `;
  }
}

window.customElements.define('with-attributes', WithAttributes);
