"use client";
import { useNoteStore } from "@/stores/noteStore";

import SingleNote from "./SingleNote";
import Link from "next/link";

const NoteList = () => {
  const { notes } = useNoteStore((state) => ({
    notes: state.notes,
  }));

  if (notes.length == 0)
    return (
      <div className="flex flex-col justify-start h-screen items-center mt-10">
        <h1 className="text-2xl font-bold">
          Hi, welcome to Note taker.
          <br />
          It looks empty hit this button
        </h1>
        <br />
        <Link className="bg-slate-300 p-2 rounded-md w-fit" href="/create">
          Create
        </Link>
      </div>
    );
  return (
    <div className="flex mt-6 flex-wrap">
      {notes.map((note) => (
        <SingleNote key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
