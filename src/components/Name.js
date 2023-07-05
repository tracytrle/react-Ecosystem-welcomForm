import React from "react";

function Name({ name, setName }) {
  return (
    <div>
      <label htmlFor="username">UserName</label>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="username"
        type="text"
        autoComplete="off"
      />
    </div>
  );
}

export default Name;
