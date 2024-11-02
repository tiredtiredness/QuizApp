/* eslint-disable react/prop-types */
import styles from './Button.module.css';

const Button = ({ children, disabled = false, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${disabled ? styles.disabled : ''}`}
        onClick={onClick}
      >
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
