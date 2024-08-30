import { HomeAssistant } from "../types";
import { CalendarEvent } from "../types/calendar";

type CalendarResponse = {
  [key: string]: {
    events: Array<{
      start: string;
      end: string;
      summary: string;
    }>;
  };
};

const groupEvents = (calendars: CalendarResponse) => {
  const events: CalendarEvent[] = [];

  Object.entries(calendars).forEach(([calendar, data]) => {
    data.events.forEach((event) => {
      events.push({
        calendar,
        start: event.start,
        end: event.end,
        summary: event.summary || "Busy",
      });
    });
  });

  events.sort((a, b) => a.start.localeCompare(b.start));

  return events;
};

export const fetchEvents = async (hass: HomeAssistant, entities: string[]) => {
  const now = new Date();
  const current = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    32
  ).toISOString();

  const { response: allEvents } = await hass?.callService(
    "calendar",
    "get_events",
    {
      end_date_time: current,
    },
    { entity_id: entities },
    true,
    true
  );

  return groupEvents(allEvents);
};
