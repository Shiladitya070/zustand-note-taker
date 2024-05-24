"use client";
import SingleNote from "@/components/SingleNote";
import { useNoteStore } from "@/stores/noteStore";
import React from "react";

const Page = () => {
  const notes = useNoteStore((state) => state.notes);
  const pinNote = notes.filter((note) => note.pin == true);
  console.log(pinNote.length);
  if (pinNote.length == 0) return <h1>No pinned Notes</h1>;
  return (
    <div>
      <div className="flex mt-6 flex-wrap">
        {pinNote.map((note) => (
          <SingleNote key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Page;
