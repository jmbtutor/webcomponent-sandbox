import { LitElement, html, css } from 'lit-element';

/* LightDom renders its template into the light DOM instead of using a
 * shadow DOM.
 */
class LightDom extends LitElement {
  /* LitElement by default will create a shadow DOM and render into it.
   * We can force it to render into the light DOM by overriding the
   * `createRenderRoot` function and having it return `this`.
   */
  createRenderRoot() {
    return this;
  }

  /* <slot> does not work in the light DOM. Any children passed to this
   * component when it is used will be overwritten. The alternative is to accept
   * child nodes as properties, which is awkward from a usability
   * standpoint.
   */
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
