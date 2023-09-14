import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClose}
      type={props.type}
      className={styles["form-submit__button"]}
    >
      {props.children}
    </button>
  );
};

export default Button;
