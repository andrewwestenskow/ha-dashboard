import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "../types";
import { fetchEvents } from "../utils/calendar";
import { poll } from "../utils/promise";

type Event = {
  calendar: string;
  start: string;
  end: string;
  summary: string;
};

const FIFTEEN_MINUTES = 15 * 60 * 1000;

@customElement("upcoming-events")
class UpcomingEvents extends LitElement {
  setConfig(_config) {
    this.entities = _config.entities;
  }

  @property({ type: Array<string>, attribute: false }) entities: string[] = [];

  @property({ attribute: false, hasChanged: () => false })
  public hass?: HomeAssistant;

  @state()
  events: Event[] = [];

  fetchEvents = async () => {
    console.log("fetching");
    if (this.hass) {
      return fetchEvents(this.hass, this.entities).then((res) => {
        this.events = res;
      });
    }
  };

  connectedCallback(): void {
    super.connectedCallback();
    this.fetchEvents();
    poll(this.fetchEvents, FIFTEEN_MINUTES);
  }

  render() {
    console.log(this.hass);
    return html`<ha-card>What </ha-card>`;
  }
}
