import { create } from "zustand";
import { INITIAL_EVENTS } from "../data";

const useCalendar = create((sets) => ({
  currentEvents: INITIAL_EVENTS,
  setCurrentEvents: (events) => sets({ currentEvents: events }),
}));
export default useCalendar;
