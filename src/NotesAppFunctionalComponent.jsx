import React, { useState } from "react";
import Header from "./components/Header.jsx";
import MyFormInput from "./components/MyFormInput.jsx";
import ListNotesAktif from "./components/ListNotesAktif.jsx";
import ListArsipNoted from "./components/ListArsipNoted.jsx";
import { getInitialData, showFormattedDate } from "./utils/index.js";

const generateUniqueId = () => Math.floor(Math.random() * 1000) + 1;

const NotedApps = () => {
  const [notes, setNotes] = useState(
    getInitialData().filter((note) => !note.archived)
  );
  const [arsip, setArsip] = useState(
    getInitialData().filter((note) => note.archived)
  );
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createdAt] = useState(showFormattedDate(new Date()));
  const [archived, setArchived] = useState(false);

  const generateTanggal = () => showFormattedDate(new Date());

  const onDelete = (noteId) => {
    const isConfirmed = window.confirm("Are You Sure to delete this notes ?");
    if (!isConfirmed) return;

    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
    alert("note with id " + noteId + " deleted");
  };

  const onDeleteArsip = (noteId) => {
    const isConfirmed = window.confirm(
      "Are You Sure to delete this archive notes ?"
    );
    if (!isConfirmed) return;

    const newArsip = arsip.filter((note) => note.id !== noteId);
    setArsip(newArsip);
    alert("note archive with id " + noteId + " deleted");
  };

  const onArchive = (noteId) => {
    const isConfirmed = window.confirm("Are You Sure to  archive this notes ?");
    if (!isConfirmed) return;

    const newNotes = notes.filter((note) => note.id !== noteId);
    const newNote = notes.find((note) => note.id === noteId);
    newNote.archived = true;

    setNotes(newNotes);
    setArsip([newNote, ...arsip]);
  };

  const onUnArchive = (noteId) => {
    const isConfirmed = window.confirm(
      "Are You Sure to  Unarchive this notes ?"
    );
    if (!isConfirmed) return;

    const newArsip = arsip.filter((note) => note.id !== noteId);
    const newNote = arsip.find((note) => note.id === noteId);
    newNote.archived = false;

    setArsip(newArsip);
    setNotes([newNote, ...notes]);
  };

  const onCari = (teks) => {
    if (teks.length === 0 || teks === "") {
      setNotes(getInitialData().filter((note) => !note.archived));
      setArsip(getInitialData().filter((note) => note.archived));
      return;
    }

    const newNotes = notes.filter((note) =>
      note.body.toLowerCase().includes(teks.toLowerCase())
    );
    const newArsips = arsip.filter((arsip) =>
      arsip.body.toLowerCase().includes(teks.toLowerCase())
    );

    setNotes(newNotes);
    setArsip(newArsips);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();

    const newNote = {
      id: generateUniqueId(),
      title,
      body,
      createdAt,
      archived,
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setBody("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") setTitle(value);
    if (name === "body") setBody(value);
  };

  return (
    <div className="note-app__body">
      <Header onCari={onCari} />
      <MyFormInput
        title={title}
        body={body}
        onSubmit={onSubmitEventHandler}
        onInputChange={handleInputChange}
      />
      <ListNotesAktif notes={notes} onDelete={onDelete} onArchive={onArchive} />
      <ListArsipNoted
        notes={arsip}
        onDeleteArsip={onDeleteArsip}
        onUnarchive={onUnArchive}
      />
    </div>
  );
};

export default NotedApps;
