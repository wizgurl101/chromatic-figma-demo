import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./styles.css";

const SignInPanel: React.FC = () => {
  const buttonHandleOnClick = () => {
    console.log("signing in....");
  };
  return (
    <div className="card">
      <div>
        <Logo />
      </div>
      <div className="container">
        <Button disabled={false} onClick={buttonHandleOnClick}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default SignInPanel;
