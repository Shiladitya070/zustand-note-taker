"use client";
import { useNoteStore } from "@/stores/noteStore";
import { useParams } from "next/navigation";
import React from "react";

function Page() {
  const { id } = useParams();

  const notes = useNoteStore((state) => state.notes);
  const note = notes.find((note) => note.id == id);

  console.log("🟢", note);

  if (!note) return <h1>Not Found</h1>;

  return (
    <div className="mt-6 mx-5">
      <h1 className="text-4xl font-bold">{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}

export default Page;
