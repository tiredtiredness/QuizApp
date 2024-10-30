import { useState } from 'react';
import ButtonIcon from './ButtonIcon';

import styles from './Counter.module.css';

const Counter = () => {
  const [value, setValue] = useState(18);

  return (
    <form className={styles.counter}>
      <button
        type='button'
        onClick={() => {
          setValue(value => value - 1);
        }}
        className={styles.counterButton}
      >
        <ButtonIcon type='minus' color />
      </button>
      <input
        type='number'
        name=''
        id=''
        value={value}
        className={styles.counterInput}
        readOnly
      />
      <button
        type='button'
        onClick={() => {
          setValue(value => value + 1);
        }}
        className={styles.counterButton}
      >
        <ButtonIcon type='plus' color />
      </button>
    </form>
  );
};

export default Counter;
