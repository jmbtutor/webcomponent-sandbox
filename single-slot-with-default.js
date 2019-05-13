import { LitElement, html } from 'lit-element';

class SingleSlot extends LitElement {
  render() {
    return html`
      <p>Before slot</p>
      <slot>Default slot text</slot>
      <p>After slot</p>
    `;
  }
}

window.customElements.define('single-slot-with-default', SingleSlot);
