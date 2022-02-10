import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState([]);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const errors = [];

    if (enteredUsername.trim().length === 0) {
      errors.push("Username can not be left empty");
    }
    if (enteredAge.trim().length === 0) {
      errors.push("Age can not be left empty");
    }
    if (enteredAge.trim().length > 0 && +enteredAge < 18) {
      errors.push("You can not register when you are younger than 18");
    }

    if (!errors.length) {
      const details = {
        key: Math.random(),
        name: enteredUsername,
        age: enteredAge,
      };

      props.getDetails(details);

      setEnteredUsername("");
      setEnteredAge("");
    }

    if (errors.length) {
      setError(true);
      setErrorMsg(errors);
    }
  };

  const closeModal = () => {
    setError(false);
    setErrorMsg([]);
  };
  console.log(error);

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {error && (
        <ErrorModal title="Error" messages={errorMsg} closeModal={closeModal} />
      )}
    </div>
  );
}

export default AddUser;
