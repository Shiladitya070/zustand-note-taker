"use client";
import { useNoteStore } from "@/stores/noteStore";

import SingleNote from "./SingleNote";

const NoteList = () => {
  const { notes } = useNoteStore((state) => ({
    notes: state.notes,
  }));

  if (notes.length < 0) return <h1>Empty...</h1>;
  return (
    <div className="flex mt-6 flex-wrap">
      {notes.map((note) => (
        <SingleNote key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
