"use client"
import React, { useState } from "react";

function CreateArea() {
  const [displayForm, setDisplayForm] = useState(false);

  const handleClick = () => {
    setDisplayForm(true);
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
            className="w-full border-none p-1 outline-none text-xl resize-none"
          />
          <textarea
            name="content"
            placeholder="Take a note..."
            rows={3}
            className="w-full border-none p-1 outline-none text-xl resize-none"
          />
          <button className="absolute right-5 bottom-[-18px] bg-[#f5ba13] border-none rounded-[50%] w-9 h-9 shadow-lg cursor-pointer outline-none text-white text-3xl">
            +
          </button>
        </form>
      )}
    </div>
  );
}

export default CreateArea;

// import React from "react";

// function CreateArea() {
//   return (
//     <div>
//       <form className="relative w-[95%] md:w-3/4 lg:w-8/12 xl:w-1/2 mt-8 mx-auto mb-5 bg-white p-4 rounded-lg shadow-md">
//         <input
//           name="title"
//           placeholder="Title"
//           className="w-full border-none p-1 outline-none text-xl resize-none"
//         />
//         <textarea
//           name="content"
//           placeholder="Take a note..."
//           rows={3}
//           className="w-full border-none p-1 outline-none text-xl resize-none"
//         />
//         <button 
//          className="absolute right-5 bottom-[-18px] bg-[#f5ba13] border-none rounded-[50%] w-9 h-9 shadow-lg cursor-pointer
//          outline-none text-white text-3xl">+</button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;
