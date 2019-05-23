import { LitElement, html } from 'lit-element';

/* NamedSlot contains three slots: one unnamed and two named.
 */
class NamedSlot extends LitElement {
  render() {
    /* Slots can be named. A node in the light DOM can be marked for
     * distribution into a slot using the `slot` attribute. Any
     * non-marked nodes, including text and whitespace nodes, get
     * distributed into the unnamed slot.
     *
     * Multiple nodes can be marked for the same slot, and can be
     * interspersed with unmarked nodes or nodes marked for different
     * slots. Each node will be distributed into its respective slot and
     * appended to the slot in order.
     */
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
