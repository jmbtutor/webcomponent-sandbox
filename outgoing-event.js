import { LitElement, html } from 'lit-element';

/* OutgoingEvent dispatches an event that can be listened to from the
 * outside. A custom event is dispatched when the button in the
 * component's template is clicked.
 */
class OutgoingEvent extends LitElement {
  /* This element's template contains a text box and a button, which
   * will generate native events when interacted with. In addition, a
   * click handler is attached to the button.
   *
   * To attach an event handler to an element, lit-html uses the prefix
   * `@` before the event name. The event handler will automatically
   * have a bound `this` to this object.
   *
   * In vanilla JS, you would normally either have a reference to the
   * node that you want to attach it to or you can get a reference using
   * a query selector. You cannot do that with lit-html because of its
   * abstractions, so the `@` syntax is provided.
   */
  render() {
    return html`
      <input />
      <button @click="${this.buttonClick}">Press Me</button>
    `;
  }

  /* buttonClick is given as the event handler function for the button's
   * click event. `this` can safely be used because lit-html
   * automatically binds the function's `this` value.
   *
   * The CustomEvent constructor is used to create a custom event with
   * detail (i.e. a payload). The `bubbles` and `composed` options must
   * be set to `true` for the event to bubble up and out of the shadow
   * DOM.
   */
  buttonClick(e) {
    console.log('outgoing-event', e.type, e.detail, e.target.tagName);
    this.dispatchEvent(new CustomEvent('button-pressed', {
      detail: e.detail,
      bubbles: true,
      composed: true,
    }));
  }
}

window.customElements.define('outgoing-event', OutgoingEvent);
