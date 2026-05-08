import React, { useState, useEffect } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState([]);

  function search(event) {
    event.preventDefault();

    let apiKey = "cb60bbeo7bd602d062ff8d664eta0043";

    let apiUrl =
      `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    let imageApiUrl =
      `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;

    // Dictionary API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setResults(data);
      });

    // Images API
    fetch(imageApiUrl)
      .then(response => response.json())
      .then(data => {
        setPhotos(data.photos);
      });
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    setKeyword("sunset");

    let apiKey = "cb60bbeo7bd602d062ff8d664eta0043";

    let apiUrl =
      `https://api.shecodes.io/dictionary/v1/define?word=sunset&key=${apiKey}`;

    let imageApiUrl =
      `https://api.shecodes.io/images/v1/search?query=sunset&key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setResults(data);
      });

    fetch(imageApiUrl)
      .then(response => response.json())
      .then(data => {
        setPhotos(data.photos);
      });
  }, []);

  return (
    <div className="Dictionary">
      <h1>Search for a word</h1>

      <form onSubmit={search}>
        <label htmlFor="search-input">
            Search for a word
        </label>
        <input
        id="search-input"
          type="search"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="Enter a word..."
          autoFocus={true}
        />
      </form>

      <Results results={results} />

      <Photos photos={photos} />
    </div>
  );
}