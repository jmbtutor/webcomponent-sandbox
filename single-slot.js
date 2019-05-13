import { LitElement, html } from 'lit-element';

class SingleSlot extends LitElement {
  render() {
    return html`
      <p>Before slot</p>
      <slot></slot>
      <p>After slot</p>
    `;
  }
}

window.customElements.define('single-slot', SingleSlot);
