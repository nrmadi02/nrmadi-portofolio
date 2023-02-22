import { StateCreator } from "zustand";


export interface NavbarSlice {
  isOpen: boolean;
  changeState: () => void;
  closeNav: () => void
}

export const createNavbarSlice: StateCreator<NavbarSlice> = (set, get) => ({
  isOpen: false,
  changeState: async () => {
    set({
      isOpen: !get().isOpen,
    });
  },
  closeNav: async () => {
    set({
      isOpen: false,
    });
  },
});
