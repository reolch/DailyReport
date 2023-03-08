import React, { useState } from "react";
import { Button, Avatar } from "@mui/material";
import "./Sidebar.css";

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
        <Avatar alt="User" src="/image/user-icon.png" sx={{ width: 53, height: 53 }}></Avatar>
        <p>User</p>
      </div>
      <div className="app-sidebar-header">
        <h1>日報</h1>
        <Button size="small" variant="outlined" onClick={onAddNote}>
          追加
        </Button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="app-sidebar-note-title">
              <strong>{note.title}</strong>
              <Button sx={{left: 10}} size="small" variant="outlined" onClick={() => onDeleteNote(note.id)}>
                削除
              </Button>
            </div>
            <small>
              {new Date(note.modDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
