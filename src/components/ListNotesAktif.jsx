import React from "react";

function ListNotesAktif({ notes }) {
  //tampilkan daftar noted disini dengan loops
  //gunakan map
  return (
    <div>
      <h2>Daftar Catatan Aktif</h2>
    </div>
  );
  // return (
  //     <div className="notes-list">
  //         <h2>Catatan Aktif</h2>
  //         <ul>
  //             {notes.map((note) => (
  //                 <li key={note.id}>
  //                     <h3>{note.title}</h3>
  //                     <p>{note.body}</p>
  //                 </li>
  //             ))}
  //         </ul>
  //     </div>
  // )
}
export default ListNotesAktif;
