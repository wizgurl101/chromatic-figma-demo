import React from "react";
import { ButtonProps } from "./types";
import "./styles.css";

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
  secondary,
  type,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={secondary ? "secondary-button" : "primary-button"}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
