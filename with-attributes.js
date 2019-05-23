import { LitElement, html } from 'lit-element';

/* WithAttributes has two attributes: `value` and `count`.
 */
class WithAttributes extends LitElement {
  /* Attribute: a value set through HTML or `setAttribute`. Can be read
   *            through `getAttribute`.
   * Property: a value set through and accessed from a property on the
   *            node's JavaScript object.
   *
   * LitElement knows to track certain properties and attributes through
   * the static properties getter. The keys are the attribute/property
   * names, and their values are options objects that must have at least
   * a type, which tells LitElement which type to convert to when
   * converting an attribute to a property. However, when setting a
   * property, the value is set as-is and is not converted.
   *
   * By default, attributes are observed for changes and the
   * corresponding property is updated. It is good practice to also
   * reflect properties back into the attribute when it makes sense
   * (when the attribute is a primitive type and when the value
   * does not change often). This can be specified in the options object
   * (not shown here).
   *
   * Properties must be initialized in the constructor.
   *
   * As an alternative to the static properties getter, LitElement has
   * TypeScript decorators that allows the writer to declare its options
   * next to the declarations.
   *
   * https://lit-element.polymer-project.org/guide/properties
   */
  static get properties() {
    return {
      value: { type: String },
      count: { type: Number },
    }
  }

  /* Properties are initialized in the constructor. Since this class is
   * a subclass, we must also call the parent constructor.
   */
  constructor() {
    super();
    this.value = 'value';
    this.count = 10;
  }

  /* To use properties in the template, access them as normal properties
   * on the object and use interpolation to insert them into the
   * template.
   *
   * When the component is updating, lit-html will be able to update
   * only the changed properties without affecting the surrounding
   * nodes.
   */
  render() {
    return html`
      <p>value: ${this.value}</p>
      <p>count: ${this.count}</p>
    `;
  }
}

window.customElements.define('with-attributes', WithAttributes);
