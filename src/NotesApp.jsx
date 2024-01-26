import React from "react";
import Header from "./components/Header";
//import MyFormInput from "./components/MyFormInput";
import ListNotesAktif from "./components/ListNotesAktif";
import ListArsipNoted from "./components/ListArsipNoted";
import { getInitialData, showFormattedDate } from "./utils/index.js";
//disini nanti return 3 buah komponen
//1. Header
//2. Catatan Aktif
//3. Arsip
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000) + 1;
};
class NotedApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData().filter((note) => note.archived === false),
      arsip: getInitialData().filter((note) => note.archived === true),
      title: "",
      body: "",
      createdAt: this.generateTanggal(),
      archived: false,
    };
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  generateTanggal() {
    const currentDate = new Date();
    const formattedDate = showFormattedDate(currentDate);
    return formattedDate.toString();
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    const newNotes = {
      id: generateUniqueId(),
      title: this.state.title,
      body: this.state.body,
      createdAt: this.state.createdAt,
      archived: this.state.archived,
    };
    this.setState(() => ({
      notes: [newNotes, ...this.state.notes],
      title: "", // Mengosongkan nilai title setelah submit
      body: "", // Mengosongkan nilai body setelah submit
    }));
    console.log(this.state.notes);
    // alert("tambah catatan");
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="note-app__body">
        <Header />
        <div className="note-input__body">
          <div className="note-input">
            <h1 className="note-input__title">Buat Catatan!</h1>
            <form
              className="note-input__body"
              onSubmit={this.onSubmitEventHandler}
            >
              <input
                className="input"
                type="text"
                name="title"
                placeholder="Judul"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
              <textarea
                className="note-input__textarea"
                name="body"
                placeholder="Catatan"
                value={this.state.body}
                onChange={this.handleInputChange}
              ></textarea>
              <button className="note-input__button">Tambah Catatan</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
// class NotedApps extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: getInitialData().filter((note) => note.archived === false),
//       arsip: getInitialData().filter((note) => note.archived === true),
//       title: "buku",
//       body: "test",
//       createdAt: "2021-09-01T13:00:00.000Z",
//       archived: false,
//       // newData: {
//       //   title: "ikan",
//       //   body: "ayam",
//       //   archived: false,
//       // },
//     };
//     this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
//   }
//   onSubmitEventHandler(event) {
//     event.preventDefault();
//     const newNotes = {
//       id: generateUniqueId(),
//       title: this.state.title,
//       body: this.state.body,
//       createdAt: this.state.createdAt,
//       archived: this.state.archived,
//     };
//     console.log(newNotes);
//     this.setState((prevState) => ({
//       notes: [newNotes, ...prevState.notes],
//     }));
//     console.log(this.state.notes);
//     alert("tambah catatan");
//   }

//   render() {
//     console.log(this.state.arsip);
//     return (
//       <div className="note-app__body">
//         <Header />
//         <div className="note-input__body">
//           <div className="note-input">
//             <h1 className="note-input__title">Buat Catatan!</h1>
//             <form
//               className="note-input__body"
//               onSubmit={this.onSubmitEventHandler}
//             >
//               <input
//                 className="input"
//                 type="text"
//                 placeholder="Judul"
//                 value={this.state.title}
//               />
//               <textarea
//                 className="note-input__textarea"
//                 placeholder="Catatan"
//               ></textarea>
//               <button className="note-input__button">Tambah Catatan</button>
//             </form>
//           </div>
//           {/* <ListNotesAktif notes={notes} /> */}
//           {/* <ListArsipNoted arsip={arsip} /> */}
//         </div>
//       </div>
//     );
//   }
// }

export default NotedApps;
