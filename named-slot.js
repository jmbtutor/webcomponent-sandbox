import { LitElement, html } from 'lit-element';

class NamedSlot extends LitElement {
  render() {
    return html`
      <div>
        Unnamed: |<slot>Unnamed</slot>|<br />
        Slot 1: |<slot name="slot1">Slot 1</slot>|<br />
        Slot 2: |<slot name="slot2">Slot 2</slot>|<br />
      </div>
    `;
  }
}

window.customElements.define('named-slot', NamedSlot);
