import React, { useState } from "react";
import axios from "axios";

const IndexPage = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const doSearch = async () => {
    const resultSet = await axios.get("/api/search", {
      params: {
        term: term,
      },
    });
    setResults(resultSet.data);
    console.log(resultSet.data);
  };

  return (
    <div>
      <h1>Guardian Search</h1>
      <div>
        <input value={term} onChange={(evt) => setTerm(evt.target.value)} />
        <button onClick={() => doSearch()} disabled={term.length < 2}>
          Search
        </button>
      </div>
      <div>
        <h2>Results</h2>
        <ul>
          {results.map((result) => {
            return (
              <li key={result.title}>
                <a href={result.url}>{result.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default IndexPage;
