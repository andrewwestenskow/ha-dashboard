import { format } from "date-fns/format";
import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { baselineCss } from "../constants/css";
import { HomeAssistant, LovelaceCard } from "../types";
import { Day } from "../types/calendar";
import { fetchEvents } from "../utils/calendar";
import { poll } from "../utils/promise";

const FIFTEEN_MINUTES = 15 * 60 * 1000;

@customElement("upcoming-events")
class UpcomingEvents extends LitElement implements LovelaceCard {
  setConfig(_config) {
    this.entities = _config.entities;
  }

  @property({ type: Array<string>, attribute: false }) entities: string[] = [];

  @property({ attribute: false, hasChanged: () => false })
  public hass?: HomeAssistant;

  @state()
  events: Day[] = [];

  getCardSize(): number | Promise<number> {
    return 1;
  }

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
    return html`<ha-card header="Calendar" class="upcoming-events-card">
      <div class="event-list">
        ${this.events.map((d) => {
          const allDayEvents = d.events
            .filter((e) => e.isAllDay)
            .map((e) => e.summary)
            .join(", ");
          return html`<div>
            <p class="date">
              ${format(d.date, "d MMMM")} ${!!allDayEvents ? "-" : ""}
              ${allDayEvents}
            </p>
            <ul class="day">
              ${d.events
                .filter((e) => !e.isAllDay)
                .map((e) => {
                  return html`<li
                    class="event ${e.calendar.slice(
                      e.calendar.lastIndexOf(".") + 1
                    )}"
                  >
                    ${e.summary} -
                    ${e.isAllDay ? "All Day" : format(e.start, "h:mm a")}
                  </li>`;
                })}
            </ul>
          </div>`;
        })}
      </div>
    </ha-card>`;
  }

  static get styles() {
    return css`
      ${baselineCss}
      .upcoming-events-card {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      .event-list {
        padding: 16px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex-grow: 1;
      }
      .event-list::-webkit-scrollbar {
        display: none;
      }
      .day {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .date {
        font-weight: bold;
        font-size: 1.2em;
        padding-bottom: 8px;
      }
      .event {
        padding: 8px;
        border-radius: 12px;
      }
      .event.andrew {
        background-color: #f44336;
        color: white;
      }
      .event.westenskows {
        background-color: #553555;
        color: white;
      }
      .event.awestenskow_bamboohr_com {
        background-color: #04e824;
        color: black;
      }
      .event.paprika {
        background-color: #ff8c00;
        color: white;
      }
      .event.holidays_in_united_states {
        background-color: #d8a47f;
        color: black;
      }
    `;
  }
}
