import React, { useState } from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid username",
        message: "Please enter a valid username and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    props.onLifter(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onError={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card classes={styles["sec-1"]}>
        <form onSubmit={submitFormHandler} className={styles.form}>
          <div className={styles["form-controler"]}>
            <div className={`${styles["form-controler__inputs"]}`}>
              <label htmlFor="user-name">Username</label>
              <input
                type="text"
                id="user-name"
                placeholder="Enter Your Name"
                value={enteredUsername}
                onChange={usernameChangeHandler}
              ></input>
            </div>
            <div className={`${styles["form-controler__inputs"]}`}>
              <label htmlFor="user-age">Age (Years)</label>
              <input
                type="number"
                id="user-age"
                placeholder="Enter Your Age"
                value={enteredAge}
                onChange={ageChangeHandler}
              ></input>
            </div>
            <div className={styles["form-submit"]}>
              <Button type="submit">Add User</Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
