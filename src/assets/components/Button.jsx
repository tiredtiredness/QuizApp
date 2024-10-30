import { Fragment } from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
      <div className={styles.description}>
        <p>
          или нажми <span>Enter ↵</span>
        </p>
      </div>
    </div>
  );
};

export default Button;
