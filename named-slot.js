import { LitElement, html } from 'lit-element';

class NamedSlot extends LitElement {
  render() {
    html`
      <div>
        Default: <slot>Default</slot>
        Slot 1: <slot name="slot1">Slot 1</slot>
        Slot 1: <slot name="slot2">Slot 2</slot>
      </div>
    `;
  }
}

window.customElements.define('named-slot', NamedSlot);
