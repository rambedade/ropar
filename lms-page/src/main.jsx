import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your App component
import "./style.css"; // Import your CSS file

// Render the App component
ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
