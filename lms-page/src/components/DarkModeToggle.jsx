import React, { useState, useEffect } from "react";

function DarkModeToggle() {
  // Check the current theme from local storage or default to light mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const initialTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", initialTheme);
    setDarkMode(initialTheme === "dark");
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
