import React, { useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [display, displayName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    displayName(name)
  };

  return (
    <div className="container">
      <h1>Hello {display}</h1>
      <input
        type="text" 
        placeholder="Input a Name & click Submit"
        onChange={handleChange}
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
