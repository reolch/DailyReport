import React, { useState } from "react";

import "./Sidebar.scss";
import SidebarUserIcon from "./Sidebar/SidebarUserIcon";
import SidebarAddCard from "./Sidebar/SidebarAddCard";
import SidebarNote from "./Sidebar/SidebarNote";

const Sidebar = (props) => {
  const {
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
    isHiddenSidebar,
    setIsHiddenSidebar,
  } = props;

  const handleClickButton = () => {
    setIsHiddenSidebar(!isHiddenSidebar);
  };

  if (isHiddenSidebar) {
    return (
      <Button variant="outlined" onClick={handleClickButton}>
        表示
      </Button>
    );
  }

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-userinfo">
        <SidebarUserIcon />
      </div>
      <div className="app-sidebar-header">
        <SidebarAddCard onAddNote={onAddNote}/>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <SidebarNote
            note={note}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
            onDeleteNote={onDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
