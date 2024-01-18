import React, { useState } from "react";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleRandomColor = () => {
    // Generate a random color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Update the selected color
    setSelectedColor(randomColor);
  };

  return (
    <div>
      {/* Color input field */}
      <input type="color" value={selectedColor} onChange={handleColorChange} />

      {/* Display selected color */}
      <div
        style={{
          marginTop: "10px",
          width: "50px",
          height: "50px",
          marginLeft: "300px",
          backgroundColor: selectedColor,
        }}
      ></div>

      {/* Button to generate random color */}
      <button
        onClick={handleRandomColor}
        style={{
          marginTop: "10px",
          padding: "10px",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#000",
          borderRadius: "5px",
        }}
      >
        Generate Random Color
      </button>
    </div>
  );
};

export default ColorPicker;
