import { LitElement, html, css } from 'lit-element';

class WithStyles extends LitElement {
  static get styles() {
    return css`
      :host([hiddden]) {
        display: none;
      }

      p {
        color: red;
      }

      p.other {
        color: blue;
        font-weight: bold;
      }
    `;
  }

  render() {
    return html`
      <p>paragraph 1</p>
      <p class="other">paragraph 2</p>
      <p>paragraph 3</p>
    `;
  }
}

window.customElements.define('with-styles', IncomingEvent);
