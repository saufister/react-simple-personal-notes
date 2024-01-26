import React from "react";

function Pencarian({ onCari }) {
  const handleInputChange = (event) => {
    const searchText = event.target.value;
    onCari(searchText);
  };
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari Catatan..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Pencarian;
