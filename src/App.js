import React, { useState, useEffect } from "react";
import Name from "./components/Name";
import FavoriteLanguage from "./components/FavoriteLanguage";
import Display from "./components/Display";
import useLocalStorageState from "./hooks/useLocalStorageState";
import useCounter from "./hooks/useCounter";

function App() {
  const [name, setName] = useLocalStorageState("name");
  const [language, setLanguage] = useLocalStorageState("language");
  const [count, increment, decrement] = useCounter("count", 0);

  return (
    <div>
      <Name name={name} setName={setName} />
      <FavoriteLanguage language={language} setLanguage={setLanguage} />
      <Display name={name} language={language} />
      <p>{"=".repeat(50)}</p>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
