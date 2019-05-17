import { LitElement, html } from 'lit-element';

class IncomingEvent extends LitElement {
  static get properties() {
    return {
      data: { type: String },
    };
  }

  constructor() {
    super();
    this.handleIncoming = this.handleIncoming.bind(this);
    this.data = '';
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('incoming-custom-event', this.handleIncoming);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('incoming-custom-event', this.handleIncoming)
  }

  render() {
    return html`<output>data: ${this.data}</output>`;
  }

  handleIncoming(event) {
    this.data = event.detail;
  }
}

window.customElements.define('incoming-event', IncomingEvent);
