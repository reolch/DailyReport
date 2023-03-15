import { Button } from "@mui/material";

const SidebarNote = (props) => {
  const { note, activeNote, setActiveNote, onDeleteNote } = props;

  return (
    <div
      className={`app-sidebar-note ${note.id === activeNote && "active"}`}
      key={note.id}
      onClick={() => setActiveNote(note.id)}
    >
      <div className="app-sidebar-note-title">
        <strong>{note.title}</strong>
        <Button
          sx={{ left: 10 }}
          size="small"
          variant="outlined"
          onClick={() => onDeleteNote(note.id)}
        >
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
  );
};

export default SidebarNote;
