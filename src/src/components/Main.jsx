import React from "react";
import reactMarkdown from "react-markdown";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Main.scss";
import { TextField } from "@mui/material";

const Main = (props) => {
  const { activeNote, onUpdateNotes } = props;

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

  if (!activeNote) {
    console.log("activeNote: " + activeNote);
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
          id="todayContent"
          placeholder="ノート内容を記入してください"
          value={activeNote.todayContent}
          onChange={(e) => onEditNote("todayContent", e.target.value)}
        ></textarea>
        <strong>明日の作業内容</strong>
        <textarea
          id="tomorrowContent"
          placeholder="ノート内容を記入してください"
          value={activeNote.tomorrowContent}
          onChange={(e) => onEditNote("tomorrowContent", e.target.value)}
        ></textarea>
        <strong>課題</strong>
        <textarea
          id="issue"
          placeholder="ノート内容を記入してください"
          value={activeNote.issue}
          onChange={(e) => onEditNote("issue", e.target.value)}
        ></textarea>
        <strong>連絡事項</strong>
        <textarea
          id="announcement"
          placeholder="ノート内容を記入してください"
          value={activeNote.announcement}
          onChange={(e) => onEditNote("announcement", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <strong className="preview-title">タイトル</strong>
        <p className="markdown-preview">{activeNote.title}</p>
        <strong className="preview-title">本日の作業内容</strong>
        <ReactMarkdown className="markdown-preview">
          {activeNote.todayContent}
        </ReactMarkdown>
        <strong className="preview-title">明日の作業内容</strong>
        <ReactMarkdown className="markdown-preview">
          {activeNote.tomorrowContent}
        </ReactMarkdown>
        <strong className="preview-title">課題</strong>
        <ReactMarkdown className="markdown-preview">
          {activeNote.issue}
        </ReactMarkdown>
        <strong className="preview-title">連絡事項</strong>
        <ReactMarkdown className="markdown-preview">
          {activeNote.announcement}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
