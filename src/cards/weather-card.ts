import { LitElement, html } from "lit";

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

customElements.define("weather-card", WeatherCard);
