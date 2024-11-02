import Counter from '../../components/Counter/Counter';
import Button from '../../components/Button/Button';

import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <>
      <div className={styles.mainTitleWrapper}>
        <span className={styles.heading}>Добро пожаловать</span>
        <p>на викторину по странам и столицам!</p>
      </div>
      <div className={styles.welcomeImage}></div>
      <div className={styles.mainCounterWrapper}>
        <p>Выбери количество вопросов:</p>
        <Counter />
      </div>
      <Button>Начать</Button>
    </>
  );
};

export default Welcome;
