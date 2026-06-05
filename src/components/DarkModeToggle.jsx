import React from 'react'
import styles from "../styles/DarkMode.module.css";
 
function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <button
      className={`${styles.toggleBtn} ${darkMode ? styles.dark : ""}`}
      onClick={onToggle}
    >
      {darkMode ? "☀️ Toggle Light Mode" : "🌙 Toggle Dark Mode"}
    </button>
  );
}
 
export default DarkModeToggle;
 
