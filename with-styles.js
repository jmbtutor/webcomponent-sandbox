import { LitElement, html, css } from 'lit-element';

/* WithStyles conntains an internal stylesheet.
 */
class WithStyles extends LitElement {
  /* The recommended way of defining a stylesheet is by using a static
   * styles getter. These styles are included in a style tag in the
   * resulting template.
   *
   * The css template tag sanitizes any interpolated values to avoid
   * injection.
   *
   * It is highly recommended to give the host a display style. The
   * default is inline, which can cause unexpected behaviour if the
   * component template has any block elements in it. This display style
   * can be overridden from the outside if desired.
   *
   * It is also recommended to respect the "hidden" attribute by
   * attaching a `display: none` style to the host when the attribute is
   * present.
   *
   * Styles defined here are scoped to the shadow DOM and do not leak
   * outside.
   */
  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([hidden]) {
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
      <div>div 1</div>
    `;
  }
}

window.customElements.define('with-styles', WithStyles);
