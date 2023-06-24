"use client";
import React, { useState, useEffect } from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";
import NoteEmpty from "./NoteEmpty";

interface Note {
  title: string;
  content: string;
}

const Main: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote: Note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id: number) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.length > 0 ? (
        notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))
      ) : (
        <NoteEmpty />
      )}
    </div>
  );
};

export default Main;

// import React, { useState, useEffect } from "react";
// import CreateArea from "./CreateArea";
// import Note from "./Note";

// interface Note {
//   title: string;
//   content: string;
// }

// const Main: React.FC = () => {
//   const [notes, setNotes] = useState<Note[]>([]);

//   useEffect(() => {
//     const savedNotes = localStorage.getItem("notes");
//     if (savedNotes) {
//       setNotes(JSON.parse(savedNotes));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//   }, [notes]);

//   const addNote = (newNote: Note) => {
//     setNotes((prevNotes) => {
//       return [...prevNotes, newNote];
//     });
//   };

//   const deleteNote = (id: number) => {
//     setNotes((prevNotes) => {
//       return prevNotes.filter((noteItem, index) => {
//         return index !== id;
//       });
//     });
//   };

//   return (
//     <div>
//       <CreateArea onAdd={addNote} />
//       {notes.map((noteItem, index) => {
//         return (
//           <Note
//             key={index}
//             id={index}
//             title={noteItem.title}
//             content={noteItem.content}
//             onDelete={deleteNote}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default Main;

