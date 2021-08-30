import React from "react";
import Styl

const ResultList = ({ resultItem, index }) => {
  return (
    <div key={index}>
      <img src={resultItem.image} />
      <a href={resultItem.url}>{resultItem.title}</a>
    </div>
  );
};

export default ResultList;

//a function that only taking care of rendering a list of result
