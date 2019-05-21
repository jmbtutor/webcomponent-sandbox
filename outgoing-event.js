import { LitElement, html } from 'lit-element';

class OutgoingEvent extends LitElement {
  render() {
    return html`
      <input />
      <button @click="${this.buttonClick}">Press Me</button>
    `;
  }

  buttonClick(e) {
    console.log('outgoing-event', e.type, e.detail, e.target.tagName);
    this.dispatchEvent(new CustomEvent('button-pressed', { detail: e.detail }));
  }
}

window.customElements.define('outgoing-event', OutgoingEvent);
