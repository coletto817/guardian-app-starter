import React from "react";
import btnStyles from "./Button.module.css";

const Button = ({ button }) => {
  return (
    <button
      className={buttonbtnStyles.button}
      type={button.type}
      onClick={button.onClick}
      disabled={button.disabled}
    ></button>
  );
};

export default Button;
