import React from "react";
import Button from "../Button/Button";
import "./styles.css";

const SignInPanel: React.FC = () => {
  const buttonHandleOnClick = () => {
    console.log("signing in....");
  };
  return (
    <div className="card">
      <img src="../../assets/images/city-landscape-skyline.svg" alt="logo" />
      <div className="container">
        <Button disabled={false} onClick={buttonHandleOnClick}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default SignInPanel;
