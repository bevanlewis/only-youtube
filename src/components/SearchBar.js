import React, { useState } from "react";

function SearchBar({ onSearch, isVideoDisplayed }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        textAlign: "center",
        marginTop: isVideoDisplayed ? "20px" : "20%",
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Paste YouTube video link here"
        style={{
          width: "60%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #303030",
          backgroundColor: "#181818",
          color: "#FFFFFF",
          marginRight: "10px",
          boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#FF0000",
          color: "#FFFFFF",
          cursor: "pointer",
          boxShadow: "0 0 5px rgba(255, 0, 0, 0.5)",
        }}
      >
        Show Video
      </button>
    </form>
  );
}

export default SearchBar;
