import React from "react";

import Card from "../Card/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  if (props.usersList.length === 0) {
    return (
      <p style={{ color: "white", marginTop: "2em" }}>
        No Data has been Found!!
      </p>
    );
  } else {
    return (
      <Card classes={styles["sec-2"]}>
        <ul className={styles['card-ul']}>
          {props.usersList.map((user) => (
            <li key={Math.random()} className={styles["card-ul__li"]}>
              {user.Name + " " + user.Age + " (years old)"}
            </li>
          ))}
        </ul>
      </Card>
    );
  }
};

export default UserList;
