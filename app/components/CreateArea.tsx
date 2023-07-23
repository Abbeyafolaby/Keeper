"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Note } from "@/types";
import { CreateAreaProps } from "@/types";


const CreateArea: React.FC<CreateAreaProps> = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    setDisplayForm(true);
  };

  const [note, setNote] = useState<Note>({
    title: "",
    content: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event: FormEvent) => {
    event.preventDefault();

    // Prevent submitting an empty note

    if (note.title.trim() === "" || note.content.trim() === "") {
      setShowNotification(true);
      return;
    }

    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setShowNotification(false);
  };

  return (
    <div>
      {!displayForm ? (
        <button
          onClick={handleClick}
          className="bg-[#f5ba13] text-white text-3xl rounded-full w-9 h-9 shadow-lg cursor-pointer absolute bottom-[3.5rem] right-6"
        >
          +
        </button>
      ) : (
        <form className="relative w-[95%] md:w-3/4 lg:w-8/12 xl:w-1/2 mt-8 mx-auto mb-5 bg-white p-4 rounded-lg shadow-md">
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
            className="w-full border-none p-1 outline-none text-xl resize-none"
          />
          <textarea
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            value={note.content}
            rows={3}
            className="w-full border-none p-1 outline-none text-xl resize-none"
          />
          {showNotification && (
            <p className="text-red-500 text-sm mt-2">
              Please enter a title and content for the note.
            </p>
          )}
          <button
            onClick={submitNote}
            className="absolute right-5 bottom-[-18px] bg-[#f5ba13] border-none rounded-[50%] w-9 h-9 shadow-lg cursor-pointer outline-none text-white text-3xl"
          >
            +
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateArea;