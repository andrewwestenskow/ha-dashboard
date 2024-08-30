import { differenceInDays } from "date-fns";
import { HomeAssistant } from "../types";
import { CalendarEvent, Day } from "../types/calendar";

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
      const duration = differenceInDays(event.end, event.start);
      events.push({
        calendar,
        start: event.start,
        end: event.end,
        isAllDay: duration > 0,
        duration,
        summary: event.summary || "Busy",
      });
    });
  });

  const dividedEvents = events.reduce((acc, event) => {
    const start = new Date(event.start);
    const end = new Date(event.end);
    const day = start.toDateString();
    if (acc[day]) {
      acc[day].events.push(event);
    } else {
      acc[day] = {
        date: day,
        events: [event],
      };
    }
    return acc;
  }, {} as Record<string, Day>);

  const allDays = Object.values(dividedEvents);
  allDays.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  return allDays;
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
