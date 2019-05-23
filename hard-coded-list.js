import { LitElement, html } from 'lit-element';

/* HardCodedList is a simple LitElement component. It only contains a
 * `render` function that has a fixed template.
 */
class HardCodedList extends LitElement {
  /* LitElement uses the `html` template tag from lit-html to transform
   * a string representation into a performant HTML template.
   * The `html` template tag produces a lit-html TemplateResult, which
   * contains a reference to the underlying Template object and various
   * other things.
   *
   * The nodes are rendered in a shadow DOM by default.
   */
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

/* The custom element must be registered with the browser's custom
 * elements registry.
 */
window.customElements.define('hard-coded-list', HardCodedList);
