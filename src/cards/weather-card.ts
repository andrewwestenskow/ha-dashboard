import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("weather-card")
class WeatherCard extends LitElement {
  setConfig(_config) {}

  render() {
    return html`
      <ha-card header="Weather Card">
        <div>HELLO WORLD</div>
      </ha-card>
    `;
  }
}
