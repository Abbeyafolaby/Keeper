import React from "react";

type NoteProps = {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
};

const Note: React.FC<NoteProps> = (props) => {
    function handleClick() {
      props.onDelete(props.id);
    }
  return (
    <main className="bg-[#fff] rounded-[7px] shadow-lg p-[10px] w-60 m-4 float-left">
      <div>
        <h1 className="text-lg font-bold mb-1.5">{props.title}</h1>
        <p className="text-lg mb-2.5 whitespace-pre-wrap note">
          {props.content}
        </p>
        <button
          onClick={handleClick}
          className="relative float-right mr-2.5 text-sm text-[#f5ba13] w-9 h-9 cursor-pointer outline-none"
        >
          Delete
        </button>
      </div>
    </main>
  );
};

export default Note;
