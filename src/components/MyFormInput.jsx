import React from "react";
import LimitComponent from "./LimitComponent.jsx";
const MyFormInput = ({
  title,
  body,
  onSubmit,
  onInputChange,
  characterCount,
  characterLimit,
}) => {
  console.log(characterCount);
  return (
    <div className="note-input__body">
      <div className="note-input">
        <h1 className="note-input__title">Buat Catatan!</h1>
        <LimitComponent
          characterCount={characterCount}
          characterLimit={characterLimit}
        />
        <form className="note-input__body" onSubmit={onSubmit}>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Judul"
            value={title}
            onChange={onInputChange}
          />
          <textarea
            className="note-input__textarea"
            name="body"
            placeholder="Catatan"
            value={body}
            onChange={onInputChange}
            maxLength={50}
          ></textarea>
          <button className="note-input__button">Tambah Catatan</button>
        </form>
      </div>
    </div>
  );
};

export default MyFormInput;
