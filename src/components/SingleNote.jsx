"use client";

import React from "react";
import { LuPin, LuPinOff } from "react-icons/lu";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useNoteStore } from "@/stores/noteStore";

function SingleNote({ note }) {
  const { deleteNote, pinNote } = useNoteStore((state) => ({
    deleteNote: state.deleteNote,
    pinNote: state.pinNote,
  }));
  const router = useRouter();
  return (
    <div
      key={note.id}
      className="flex flex-col justify-between bg-slate-200 p-2 m-2 rounded-md h-fit min-w-[200px] shadow-sm"
    >
      <div>
        <div className="flex items-center gap-2">
          <h1
            className="font-semibold text-xl cursor-pointer"
            onClick={() => router.push(`/notes/${note.id}`)}
          >
            {note.title}
          </h1>
          <span className="text-xs bg-slate-300 p-1 rounded-full">
            #{note.id}
          </span>
        </div>
        <TruncatedText text={note.content} wordLimit={50} />
      </div>
      {/* pin */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => pinNote(note.id)}
          className={`bg-slate-${
            note.pin ? "800" : "300"
          } p-2 rounded-md w-fit`}
        >
          {note.pin ? <LuPin /> : <LuPinOff />}
        </button>

        <button
          onClick={() => deleteNote(note.id)}
          className="bg-slate-300 p-2 rounded-md w-fit"
        >
          <AiOutlineDelete />
        </button>
        {/* update */}
        <button
          // onClick={() => deleteNote(note.id)}
          className="bg-slate-300 p-2 rounded-md w-fit"
        >
          <AiOutlineEdit />
        </button>
      </div>
    </div>
  );
}

export default SingleNote;

function truncateText(text, wordLimit) {
  const words = text.split(" ");
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(" ") + "...";
}

const TruncatedText = ({ text, wordLimit }) => {
  const truncated = truncateText(text, wordLimit);

  return <p>{truncated}</p>;
};
