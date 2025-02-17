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
        style={{ width: "60%", padding: "10px", fontSize: "16px" }}
      />
      <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>
        Show Video
      </button>
    </form>
  );
}

export default SearchBar;
