import React from "react";

// class MyFormInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "",
//     };
//   }
//   render() {
//     return (
//       <div className="note-input">
//         <h1 className="note-input__title">Buat Catatan!</h1>
//         <form className="note-input__body">
//           <input className="input" type="text" placeholder="Judul" />
//           <textarea
//             className="note-input__textarea"
//             placeholder="Catatan"
//           ></textarea>
//           <button className="note-input__button">Tambah Catatan</button>
//         </form>
//       </div>
//     );
//   }
// }
function MyFormInput({ onTambahCatatan }) {
  return (
    <div className="note-input">
      <h1 className="note-input__title">Buat Catatan!</h1>
      <form className="note-input__body" onSubmit={onTambahCatatan}>
        <input className="input" type="text" placeholder="Judul" />
        <textarea
          className="note-input__textarea"
          placeholder="Catatan"
        ></textarea>
        <button className="note-input__button">Tambah Catatan</button>
      </form>
    </div>
  );
}

export default MyFormInput;
