import { LitElement, html } from "lit";

class PrimaryView extends LitElement {
  cards: Array<any>;
  static properties = {
    cards: { type: Array },
  };

  constructor() {
    super();
    this.cards = [];
  }

  setConfig(_config) {}

  render() {
    if (!this.cards) {
      return html``;
    }
    return html`${this.cards.map((card) => html`<div>${card}</div>`)}`;
  }
}
customElements.define("primary-view", PrimaryView);
