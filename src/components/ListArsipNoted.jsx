import React from "react";
import Notes from "./NotesComponent.jsx";
import { showFormattedDate } from "../utils/index.js";
function ListArsipNoted({ notes, onUnarchive, onDeleteArsip }) {
  if (!notes || notes.length === 0) {
    return (
      <>
        <h2>Daftar Arsip</h2>
        <p className=".notes-list__empty-message">Tidak ada arsip</p>
      </>
    );
  }
  return (
    <>
      <h2>Archive</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <Notes
            key={note.id}
            title={note.title}
            tanggal={showFormattedDate(note.createdAt)}
            body={note.body}
            archived={note.archived}
            onUnArchive={onUnarchive}
            noteId={note.id}
            onDelete={onDeleteArsip}
          />
        ))}
      </div>
    </>
  );
}

export default ListArsipNoted;
