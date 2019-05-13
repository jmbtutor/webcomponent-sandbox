import { LitElement, html } from 'lit-element';

class HardCodedList extends LitElement {
  render() {
    return html`
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    `;
  }
}

window.customElements.define('hard-coded-list', HardCodedList);
