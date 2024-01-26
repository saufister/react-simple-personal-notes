import React from "react";
import Pencarian from "./Search";
function Header({ onCari }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <Pencarian onCari={onCari} />
    </div>
  );
}
export default Header;
