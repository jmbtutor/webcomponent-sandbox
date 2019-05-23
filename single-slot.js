import { LitElement, html } from 'lit-element';

/* SingleSlot is a LitElement component that allows slotted content through an unnamed slot.
 */
class SingleSlot extends LitElement {
  /* When using a shadow DOM, the component can take children and slot
   * them into a template using the <slot> element. Any child nodes in
   * the light DOM, including whitespace nodes, will be inserted at the
   * point where the <slot> is.
   */
  render() {
    return html`
      <p>Before slot</p>
      |<slot></slot>|
      <p>After slot</p>
    `;
  }
}

window.customElements.define('single-slot', SingleSlot);
