import React from "react";

function notesComponent({
  //   title = "hai",
  //   tanggal = "Jumat, 26 Januari 2024",
  //   body = "belajar aja nih bro biar bisa jadi programmer",
  //   archived, = false,
  title,
  tanggal,
  body,
  archived,
  onArchive,
  onUnArchive,
  onDelete,
  noteId,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h2 className="note-item__title">{title}</h2>
        <h3 className="note-item__date">{tanggal}</h3>
        <p className="note-item__body">{body}</p>
        <div className="note-item__action">
          <button
            onClick={() => onDelete(noteId)}
            className="note-item__delete-button"
          >
            Delete
          </button>

          {/* Gunakan sintaks if untuk menentukan apakah tombol "Archive" harus ditampilkan */}
          {/* {archived === false && (
            <button className="note-item__archive-button">Archive</button>
          )} */}
          {(() => {
            if (archived === false) {
              return (
                <button
                  className="note-item__archive-button"
                  onClick={() => onArchive(noteId)}
                >
                  Archive
                </button>
              );
            } else {
              return (
                <button
                  className="note-item__archive-button"
                  onClick={() => onUnArchive(noteId)}
                >
                  Unarchive
                </button>
              );
            }
          })()}
        </div>

        <p>{archived}</p>
      </div>
    </div>
  );
}
export default notesComponent;
