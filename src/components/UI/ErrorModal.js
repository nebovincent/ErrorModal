import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div className={classes.backdrop} onClick={props.closeModal}>
      <div onClick={props.closeModal}></div>
      <Card className={classes.modal} onClick={props.closeModal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          {props.messages.map((message) => {
            return <p key={Math.random().toString()}>{message}</p>;
          })}
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.closeModal}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
