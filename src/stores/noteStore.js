import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const noteStore = (set) => ({
  notes: [],
  // oneNote: (id) => set((state) => state.notes.find((note) => note.id === id)),
  createNote: (note) => set((state) => ({ notes: [note, ...state.notes] })),
  deleteNote: (id) =>
    set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
  pinNote: (id) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, pin: !note.pin } : note
      ),
    })),
  // updateNote: () => (),
});

export const useNoteStore = create(
  persist(devtools(noteStore), { name: "note-storage" })
);
