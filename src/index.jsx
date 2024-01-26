import React from "react";
import { createRoot } from "react-dom/client";
import NotedApps from "./NotesApp.jsx";
// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<NotedApps />);
