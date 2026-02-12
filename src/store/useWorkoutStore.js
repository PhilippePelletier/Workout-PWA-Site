import { create } from 'zustand';
import { program } from '../data/program';

const buildWeekOptions = () => Array.from({ length: program.weeks }, (_, i) => i + 1);

export const useWorkoutStore = create((set) => ({
  activeTab: 'program',
  timeSaver: false,
  selectedDayId: program.days[0]?.id ?? null,
  selectedWeek: buildWeekOptions()[0] ?? 1,
  setActiveTab: (tab) => set({ activeTab: tab }),
  toggleTimeSaver: () => set((state) => ({ timeSaver: !state.timeSaver })),
  setSelectedDay: (id) => set({ selectedDayId: id }),
  setSelectedWeek: (week) => set({ selectedWeek: week })
}));
