import { HomeAssistant } from "../types";

export const fetchEvents = async (hass: HomeAssistant, entities: string[]) => {
  const now = new Date();
  const current = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    32
  ).toISOString();

  const allEvents = await hass?.callService(
    "calendar",
    "get_events",
    {
      end_date_time: current,
    },
    { entity_id: entities },
    true,
    true
  );

  console.log(allEvents);

  return [];
};
