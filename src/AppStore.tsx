import { create } from "zustand";

interface AppState {
  bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
}


const useAppStore = create<AppState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));


export default useAppStore;
