import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function search(event) {
  event.preventDefault();

  let apiKey = "cb60bbeo7bd602d062ff8d664eta0043";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      setResults(data);
    });
}

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} placeholder="Enter a word..." autoFocus={true} />
            </form>
            
            <Results results={results} />
            
        </div>
    );
}