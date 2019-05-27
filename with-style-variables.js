import { LitElement, html, css } from 'lit-element';

/* WithStyleVariables allows style customization through CSS custom
 * properties.
 */
class WithStyleVariables extends LitElement {
  /* The recommended way to allow style customization is through CSS
   * custom properties.
   */
  static get styles() {
    return css`
      :host {
        display: block;
        --p-color: red;
        --p-other1-color: blue;
        --p-other1-font-weight: bold;
      }

      :host([hidden]) {
        display: none;
      }

      p {
        color: var(--p-color);
      }

      p.other1 {
        color: var(--p-other1-color);
        font-weight: var(--p-other1-font-weight);
      }

      p.other2 {
        color: var(--p-other2-color, green);
        font-weight: var(--p-other2-font-weight, bold);
      }
    `;
  }

  render() {
    return html`
      <p>paragraph 1</p>
      <p class="other1">paragraph 2</p>
      <p class="other2">paragraph 3</p>
      <div>div 1</div>
    `;
  }
}

window.customElements.define('with-style-variables', WithStyleVariables);
