import React from "react";

const MyFormInput = ({ title, body, onSubmit, onInputChange }) => {
  return (
    <div className="note-input__body">
      <div className="note-input">
        <h1 className="note-input__title">Buat Catatan!</h1>
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
          ></textarea>
          <button className="note-input__button">Tambah Catatan</button>
        </form>
      </div>
    </div>
  );
};

export default MyFormInput;
