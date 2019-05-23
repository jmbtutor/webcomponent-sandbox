import { LitElement, html, css } from 'lit-element';

class LightDom extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div>
        <p>Before slot</p>
        |<slot>Default slot text</slot>|
        <p>After slot</p>
      </div>
    `;
  }
}

window.customElements.define('light-dom', LightDom);
