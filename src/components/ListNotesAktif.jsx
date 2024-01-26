import React from "react";
import Notes from "./NotesComponent.jsx";
import { showFormattedDate } from "../utils/index.js";
function ListNotesAktif({ notes, onArchive, onDelete }) {
  //tampilkan daftar noted disini dengan loops
  //gunakan map
  if (!notes || notes.length === 0) {
    return (
      <>
        <h2>Daftar Catatan Aktif</h2>
        <p className=".notes-list__empty-message">Tidak ada catatan</p>
      </>
    );
  }
  return (
    <>
      <h2>Daftar Catatan Aktif</h2>

      <div className="notes-list">
        {notes.map((note) => (
          <Notes
            key={note.id}
            title={note.title}
            tanggal={showFormattedDate(note.createdAt)}
            body={note.body}
            archived={note.archived}
            onArchive={onArchive}
            noteId={note.id}
            onDelete={onDelete}
          />
        ))}
        ;
      </div>
    </>
  );
}
export default ListNotesAktif;
