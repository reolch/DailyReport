import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/sidebar";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);

  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const createNotes = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    const newNotes = [...notes, createNotes];
    setNotes(newNotes);
    console.log(notes);
  };

  const onDeleteNote = (uuid) => {
    const fileterNotes = notes.filter((note) => note.id !== uuid);
    setNotes(fileterNotes);
  };

  const onUpdateNotes = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updatedNotesArray);
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNoteId)
  }

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
      />
      <Main
      activeNoteId={activeNoteId}
      activeNote={getActiveNote()}
      onUpdateNotes={onUpdateNotes}
      />
    </div>
  );
}

export default App;
