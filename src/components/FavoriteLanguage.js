import React from "react";

function FavoriteLanguage({ language, setLanguage }) {
  return (
    <div>
      <label htmlFor="favoriteLanguage">Favorite Language</label>
      <input
        id="language"
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        type="text"
        autoComplete="off"
      />
    </div>
  );
}

export default FavoriteLanguage;
