import { createNavbarSlice, NavbarSlice } from './../lib/navbarSlice';
import {create} from "zustand";

type StoreState = NavbarSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createNavbarSlice(...a),
}));
