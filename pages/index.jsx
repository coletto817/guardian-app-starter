import React, { useState } from "react";
import ResultList from "../UI/ResultList";
import Button from "../components/button";
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
    <div className="container">
      <h1>Guardian Search</h1>
      <div>
        <input value={term} onChange={(evt) => setTerm(evt.target.value)} />
        <button
          className="searchButton"
          onClick={() => doSearch()}
          disabled={term.length < 2}
        >
          Search
          <Button />
        </button>
      </div>
      <div>
        <h2>Results</h2>
        {results.map((result) => (
          <ResultList resultItem={result} key={result.id} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
