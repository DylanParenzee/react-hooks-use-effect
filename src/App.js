import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("useEffect called");
  });

  const updateCounter = () => {
    setCount(count + 1);
  };

  const updateText = (e) => {
    setText(e.target.value);
  };

  console.log("Component rendering");

  return (
    <div>
      <button onClick={updateCounter}>ive been clicked {count} times</button>
      <input
        type="text"
        placeholder="type away..."
        value={text}
        onChange={updateText}
      />
    </div>
  );
}

export default App;
