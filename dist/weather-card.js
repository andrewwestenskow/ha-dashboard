import { LitElement, html } from 'https://unpkg.com/lit-element@2.0.1/lit-element.js?module';

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
