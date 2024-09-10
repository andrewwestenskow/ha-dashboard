import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { baselineCss } from "../constants/css";
import type {
  HassBadge,
  HassCard,
  HomeAssistant,
  Lovelace,
  LovelaceViewElement,
} from "../types";

@customElement("primary-view")
class PrimaryView extends LitElement implements LovelaceViewElement {
  hass?: HomeAssistant | undefined;
  lovelace?: Lovelace | undefined;
  narrow?: boolean | undefined;
  index?: number | undefined;
  cards?: HassCard[] | undefined;
  badges?: HassBadge[] | undefined;

  @property({ attribute: false }) isStrategy = false;

  setConfig(_config) {}

  render() {
    if (!this.cards) {
      return html``;
    }

    const { sidebar, cards } = this.cards.reduce(
      (acc, card: HassCard) => {
        const isSidebar = card._elementConfig?.variables?.find(
          (v) => "sidebar" in v && v.sidebar === 1
        );
        if (isSidebar) {
          acc.sidebar.push(card);
        } else {
          acc.cards.push(card);
        }

        return acc;
      },
      {
        sidebar: [] as HassCard[],
        cards: [] as HassCard[],
      }
    );

    return html`
      <div id="container">
        <section id="sidebar">
          ${sidebar.map((card) => {
            return html`<div>${card}</div>`;
          })}
        </section>
        <section id="cards">
          ${cards.map((card) => {
            return html`<div>${card}</div>`;
          })}
        </section>
      </div>
    `;
  }

  static get styles() {
    return css`
      ${baselineCss}
      #container {
        height: 100%;
        display: grid;
        grid-template-columns: 350px 1fr;
      }

      #container hui-card {
        border-radius: 12px;
      }

      #container ha-card {
        border: 1px solid white;
        border-radius: 12px;
      }

      #sidebar {
        box-sizing: border-box;
        background-color: var(--secondary-background-color);
        padding: 10px;
        display: grid;
        grid-template-rows: auto auto minmax(0, 1fr);
        gap: 15px;
        height: calc(100vh - var(--header-height));
      }

      #cards {
        padding: 10px;
        gap: 15px;
        display: grid;
        grid-template-columns: repeat(auto-fill, 500px);
        grid-auto-rows: min-content;
        overflow-y: auto;
        height: calc(100vh - var(--header-height));
      }
    `;
  }
}
