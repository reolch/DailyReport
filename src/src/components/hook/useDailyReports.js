import { useState } from "react";
import uuid from "react-uuid";

const useDailyReports = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);

  const addNote = () => {
    console.log("新しく日報が追加されました");
    const createNotes = {
      id: uuid(),
      title: new Date().toLocaleDateString("ja-JP") + " 日報",
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

  const deleteNote = (id) => {
    const fileterNotes = notes.filter((note) => note.id !== id);
    setNotes(fileterNotes);
  };

  const updateNotes = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updatedNotesArray);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return {
    notes,
    setNotes,
    activeNote,
    setActiveNote,
    isHiddenSidebar,
    setIsHiddenSidebar,
    addNote,
    deleteNote,
    updateNotes,
    getActiveNote
  };
};

export default useDailyReports;