import React from "react";
import Header from "./components/Header.jsx";
import MyFormInput from "./components/MyFormInput.jsx";
import ListNotesAktif from "./components/ListNotesAktif.jsx";
import ListArsipNoted from "./components/ListArsipNoted.jsx";
import { getInitialData, showFormattedDate } from "./utils/index.js";
import LimitComponent from "./components/LimitComponent.jsx";
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
      characterCount: 0,
      characterLimit: 50,
    };
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  generateTanggal() {
    const currentDate = new Date();
    const formattedDate = showFormattedDate(currentDate);
    return formattedDate.toString();
  }
  onDelete = (noteId) => {
    const isConfirmed = window.confirm("Are You Sure to delete this notes ?");
    if (!isConfirmed) {
      return;
    } else {
      const newNotes = this.state.notes.filter((note) => note.id !== noteId);
      this.setState(() => ({ notes: newNotes }));
      alert("note with id " + noteId + " deleted");
    }
  };
  onDeleteArsip = (noteId) => {
    const isConfirmed = window.confirm(
      "Are You Sure to delete this archive notes ?"
    );
    if (!isConfirmed) {
      return;
    } else {
      const newNotes = this.state.arsip.filter((note) => note.id !== noteId);
      this.setState(() => ({ arsip: newNotes }));
      alert("note archive with id " + noteId + " deleted");
    }
  };

  onArchive = (noteId) => {
    //alert("Arsip dengan note id " + noteId);
    const isConfirmed = window.confirm("Are You Sure to  archive this notes ?");
    if (!isConfirmed) {
      return;
    } else {
      const newNotes = this.state.notes.filter((note) => note.id !== noteId);
      const newNote = this.state.notes.find((note) => note.id === noteId);
      newNote.archived = true;

      // Set state dengan catatan yang telah diubah
      this.setState(() => ({
        notes: newNotes,
        arsip: [newNote, ...this.state.arsip],
      }));
    }
  };
  onUnArchive = (noteId) => {
    const isConfirmed = window.confirm(
      "Are You Sure to  Unarchive this notes ?"
    );
    if (!isConfirmed) {
      return;
    } else {
      const newArsip = this.state.arsip.filter((note) => note.id !== noteId);
      const newNote = this.state.arsip.find((note) => note.id === noteId);
      newNote.archived = false;
      // Set state dengan catatan yang telah diubah
      this.setState(() => ({
        arsip: newArsip,
        notes: [newNote, ...this.state.notes],
      }));
    }
  };
  onCari = (teks) => {
    //console.log("on cari dipanggil");
    console.log(teks);
    if (teks.length === 0 || teks === "") {
      this.setState(() => ({
        notes: getInitialData().filter((note) => note.archived === false),
        arsip: getInitialData().filter((note) => note.archived === true),
      }));
      return;
    }
    const newNotes = this.state.notes.filter((note) =>
      note.body.toLowerCase().includes(teks.toLowerCase())
    );
    const newArsips = this.state.arsip.filter((arsip) =>
      arsip.body.toLowerCase().includes(teks.toLowerCase())
    );
    this.setState(() => ({ notes: newNotes, arsip: newArsips }));
  };
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
    console.log(event.target.name);
    this.setState({ [name]: value });

    if (name === "body") {
      if (this.state.characterCount < this.characterLimit) {
        // Update state hanya jika batas karakter belum tercapai
        this.setState((prevState) => ({
          body:
            prevState.body +
            value.slice(0, this.characterLimit - prevState.characterCount),
          characterCount: prevState.characterCount + value.length,
        }));
      }
      this.setState({
        [name]: value,
        characterCount: value.length,
      });
    }

    //console.log(this.state.characterCount);
  }

  render() {
    return (
      <div className="note-app__body">
        <Header onCari={this.onCari} />

        <MyFormInput
          title={this.state.title}
          body={this.state.body}
          onSubmit={this.onSubmitEventHandler}
          onInputChange={this.handleInputChange}
          characterCount={this.state.characterCount}
          characterLimit={this.state.characterLimit}
        />
        <ListNotesAktif
          notes={this.state.notes}
          onDelete={this.onDelete}
          onArchive={this.onArchive}
        />
        <ListArsipNoted
          notes={this.state.arsip}
          onDeleteArsip={this.onDeleteArsip}
          onUnarchive={this.onUnArchive}
        />
      </div>
    );
  }
}
export default NotedApps;
