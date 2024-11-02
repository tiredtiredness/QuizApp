/* eslint-disable react/prop-types */
import styles from './Card.module.css';

const Card = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Card;
