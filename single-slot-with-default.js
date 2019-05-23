import { LitElement, html } from 'lit-element';

/* SingleSlotWithDefault is like SingleSlot, but the slot contains a
 * fallback value.
 */
class SingleSlotWithDefault extends LitElement {
  /* A <slot> can have child nodes, and these child nodes serve as the
   * fallback nodes in case the host element does not have any child
   * nodes in the light DOM. That is, the children of <slot> here will
   * display if <single-slot-with-default> does not have any children
   * when it's used in the light DOM.
   */
  render() {
    return html`
      <p>Before slot</p>
      |<slot>Default slot text</slot>|
      <p>After slot</p>
    `;
  }
}

window.customElements.define('single-slot-with-default', SingleSlotWithDefault);
