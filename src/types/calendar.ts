export type Day = {
  date: string;
  events: CalendarEvent[];
};

export type CalendarEvent = {
  calendar: string;
  start: string;
  end: string;
  summary: string;
  duration: number;
  isAllDay: boolean;
};
