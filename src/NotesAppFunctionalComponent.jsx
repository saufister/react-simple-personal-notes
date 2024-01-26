import React, { useState } from "react";
import Header from "./components/Header";
import MyFormInput from "./components/MyFormInput";
import ListNotesAktif from "./components/ListNotesAktif";
import ListArsipNoted from "./components/ListArsipNoted";
import { getInitialData, showFormattedDate } from "./utils/index.js";
const NotedApps = () => {
  const generateTanggal = () => {
    const currentDate = new Date();
    const formattedDate = showFormattedDate(currentDate);
    return formattedDate.toString();
  };
  const [notes, setNotes] = useState(
    getInitialData().filter((note) => !note.archived)
  );
  const [arsip, setArsip] = useState(
    getInitialData().filter((note) => note.archived)
  );
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createdAt, setCreatedAt] = useState(generateTanggal());
  const [archived, setArchived] = useState(false);

  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000) + 1;
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
    console.log(notes);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "body") {
      setBody(value);
    }
  };

  return (
    <div className="note-app__body">
      <Header />
      <MyFormInput
        title={title}
        body={body}
        onSubmit={onSubmitEventHandler}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default NotedApps;
