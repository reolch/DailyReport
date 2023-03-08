import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/sidebar";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);

  const onAddNote = () => {
    console.log("新しく日報が追加されました");
    const createNotes = {
      id: uuid(),
      title: new Date().toLocaleDateString("ja-JP") + ' 日報',
      todayContent: "",
      tomorrowContent: "",
      issue: "",
      announcement: "",
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
    return notes.find((note) => note.id === activeNote)
  }

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        isHiddenSidebar={isHiddenSidebar}
        setIsHiddenSidebar={setIsHiddenSidebar}
      />
      <Main
      activeNote={getActiveNote()}
      onUpdateNotes={onUpdateNotes}
      />
    </div>
  );
}

export default App;
