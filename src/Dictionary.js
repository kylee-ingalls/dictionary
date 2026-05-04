import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let apiKey = "cb60bbeo7bd602d062ff8d664eta0043";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    function search(event) {
  event.preventDefault();

  let apiKey = "cb60bbeo7bd602d062ff8d664eta0043";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
        </div>
    );
}