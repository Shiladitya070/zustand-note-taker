"use client";
import { useNoteStore } from "@/stores/noteStore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NoteForm = () => {
  const createNote = useNoteStore((state) => state.createNote);
  const router = useRouter();

  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteTitle || noteContent.length < 3)
      return alert("Please enter a title and content");
    const note = {
      id: Math.ceil(Math.random() * 10000),
      title: noteTitle,
      content: noteContent,
      pin: false,
    };
    console.log(note);

    createNote(note);

    setNoteTitle("");
    setNoteContent("");
    //TODO: redirect to the note

    router.back();
  };
  return (
    <>
      <h1>Create Your Note</h1>
      <form
        className="flex flex-col space-y-2 h-screen"
        onSubmit={handleSubmit}
      >
        <div className="flex">
          <label className="mr-4" htmlFor="title">
            Title:
          </label>
          <input
            className="bg-slate-200 rounded-md px-2 outline-none w-screen"
            type="text"
            name="title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            placeholder="Title..."
          />
        </div>
        <textarea
          name="content"
          className="bg-slate-200 rounded-md px-2 outline-none h-[80%]"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Type here..."
        ></textarea>
        <button type="submit" className="bg-slate-300 p-2 rounded-md w-fit">
          Add
        </button>
      </form>
    </>
  );
};

export default NoteForm;
