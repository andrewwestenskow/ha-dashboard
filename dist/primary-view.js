import { LitElement, html } from 'https://unpkg.com/lit-element@2.0.1/lit-element.js?module';

class PrimaryView extends LitElement {
  cards = [];

  static properties = {
    cards: { type: Array },
  };

  setConfig(_config) {}

  render() {
    if (!this.cards) {
      return html``;
    }
    return html`${this.cards.map((card) => html`<div>${card}</div>`)}`;
  }
}
customElements.define("primary-view", PrimaryView);
