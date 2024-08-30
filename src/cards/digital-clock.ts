import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { baselineCss } from "../constants/css";

@customElement("digital-clock")
class DigitalClock extends LitElement {
  setConfig() {}

  connectedCallback(): void {
    super.connectedCallback();
    this.timerId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.timerId);
  }

  @property()
  timerId;

  @state()
  private time = new Date();

  render() {
    return html`
      <ha-card>
        <div id="clock">${this.time.toLocaleTimeString()}</div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      ${baselineCss}
      #clock {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
        font-size: 42px;
      }
    `;
  }
}
