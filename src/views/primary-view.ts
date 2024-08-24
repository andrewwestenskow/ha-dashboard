import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("primary-view")
class PrimaryView extends LitElement {
  @property({ type: Array })
  cards = [];

  setConfig(_config) {}

  render() {
    if (!this.cards) {
      return html``;
    }
    return html`${this.cards.map((card) => html`<div>${card}</div>`)}`;
  }
}
