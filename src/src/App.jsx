import { useState } from "react";
import "./App.scss";
import Main from "./components/Main";
import Sidebar from "./components/sidebar";

import useDailyReports from "./components/hook/useDailyReports";

function App() {
  const {
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
  } = useDailyReports();

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={addNote}
        onDeleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        isHiddenSidebar={isHiddenSidebar}
        setIsHiddenSidebar={setIsHiddenSidebar}
      />
      <Main activeNote={getActiveNote()} onUpdateNotes={updateNotes} />
    </div>
  );
}

export default App;
