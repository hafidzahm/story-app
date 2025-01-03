import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class HeaderTitle extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute("content")) {
      throw new Error(
        `Atribut "to" harus diterapkan pada elemen ${this.localName}`
      );
    }
  }
  render() {
    return html`
      <div class="text-center py-4 grid gap-4">
        <h1>${this.content}</h1>
      </div>
    `;
  }
}

customElements.define("header-title", HeaderTitle);
