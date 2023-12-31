import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <section className={`${styles.card} ${props.classes}`}>
      {props.children}
    </section>
  );
};

export default Card;
