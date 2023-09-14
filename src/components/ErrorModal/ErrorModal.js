import styles from "./ErrorModal.module.css";

import Card from "../Card/Card";
import Button from "../Button/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div onClick={props.onError} className={styles.backdrop} />
      <Card classes={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClose={props.onError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
