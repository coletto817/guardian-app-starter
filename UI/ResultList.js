import React from "react";
import PropTypes from "prop-types";

const ResultList = ({ resultItem }) => {
  return (
    <div>
      <img src={resultItem.image} />
      <a href={resultItem.url}>{resultItem.title}</a>
      <div>{resultItem.date}</div>
    </div>
  );
};

export default ResultList;

//a function that only taking care of rendering a list of result
