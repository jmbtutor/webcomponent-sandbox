import { LitElement, html } from 'lit-element';

/* IncomingEvent is set up to listen for a custom event on the document
 * and display the details of that event.
 */
class IncomingEvent extends LitElement {
  /* The "state" of a component is held in its properties. A component
   * should not keep internal state; instead, it should write data
   * changes to its properties. The component's output (template)
   * should be a pure function of its properties.
   */
  static get properties() {
    return {
      data: { type: String },
    };
  }

  /* Unlike when the event handler is passed through lit-html, event
   * handlers bound though `addEventListener` are not automatically
   * bound, so we must do explicit `this` binding.
   */
  constructor() {
    super();
    this.handleIncoming = this.handleIncoming.bind(this);
    this.data = '';
  }

  /* All the lifecycle hooks for vanilla Web Components are available.
   * `connectedCallback` is roughly equivalent to the "mount" lifecycle
   * event in other libraries.
   *
   * The recommendation for attaching event listeners is to do them as
   * late as possible.
   */
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('incoming-custom-event', this.handleIncoming);
  }

  /* When the event handler is attached to the document, the handler
   * should be removed in `disconnectedCallback` to prevent memory
   * leaks.
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('incoming-custom-event', this.handleIncoming)
  }

  render() {
    return html`<output>data: ${this.data}</output>`;
  }

  /* Properties managed by LitElement are set up as getters and setters.
   * The default setter for the property schedules an update (which will
   * re-render the component), so manually scheduling an update is not
   * necessary.
   */
  handleIncoming(event) {
    this.data = event.detail;
  }
}

window.customElements.define('incoming-event', IncomingEvent);
