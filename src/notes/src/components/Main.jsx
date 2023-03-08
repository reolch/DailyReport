import React from "react";
import reactMarkdown from "react-markdown";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Main.css";

const Main = (props) => {
  const { activeNoteId, activeNote, onUpdateNotes } = props;

  // {}で新しいオブジェクトを作成している
  // [key]: value はComputedPropertyと呼ぶ
  // これにより既存のオブジェクトに同じ名前のプロパティがあれば上書きし、なければ追加する
  const onEditNote = (key, value) => {
    onUpdateNotes({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (activeNoteId === null) {
    console.log("activeNoteId: " + activeNoteId);
    return <div>ノートが選択されていません</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <strong>タイトル</strong>
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <strong>本日の作業内容</strong>
        <textarea
          id=""
          placeholder="ノート内容を記入してください"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
        <strong>明日の作業内容</strong>
        <textarea
          id=""
          placeholder="ノート内容を記入してください"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
