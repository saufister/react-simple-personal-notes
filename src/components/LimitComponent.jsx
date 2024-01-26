import React from "react";

function LimitComponent({ characterLimit, characterCount }) {
  console.log(characterCount);
  return (
    <div className="note-input__title__char-limit">
      <h1>
        Sisa Karakter : {characterLimit - characterCount}/{characterLimit}
      </h1>
    </div>
  );
}

export default LimitComponent;
