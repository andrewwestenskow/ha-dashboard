import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type {
  HassBadge,
  HassCard,
  HomeAssistant,
  Lovelace,
  LovelaceViewConfig,
  LovelaceViewElement,
} from "../types";

@customElement("today-view")
export class TodayView extends LitElement implements LovelaceViewElement {
  hass?: HomeAssistant | undefined;
  lovelace?: Lovelace | undefined;
  narrow?: boolean | undefined;
  index?: number | undefined;
  cards?: HassCard[] | undefined;
  badges?: HassBadge[] | undefined;

  setConfig(config: LovelaceViewConfig): void {}

  @property()
  isStrategy = false;

  render() {
    return html`<div></div>`;
  }
}
