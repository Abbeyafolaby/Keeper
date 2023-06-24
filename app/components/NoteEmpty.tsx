import React from "react";
import Image from "next/image";

const NoteEmpty: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full my-auto">
      <h3 className="text-xl font-medium">Your Note is empty...</h3>
      <h4>Write a note...</h4>
    </div>
  );
};

export default NoteEmpty;
