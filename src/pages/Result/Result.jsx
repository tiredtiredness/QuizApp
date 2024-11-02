import Button from '../../components/Button/Button';

import styles from './Result.module.css';

const Result = () => {
  const hasCorrectAnswers = true;
  const hasWrongAnswers = true;
  return (
    <>
      <div className={styles.resultImage}></div>
      {/* <img src='public/result.png' alt='' className={styles.resultImage} /> */}
      <div className={styles.resultWrapper}>
        <p className={styles.heading}>Результат</p>
        <p className={styles.resultDescription}>
          {hasCorrectAnswers && hasWrongAnswers && (
            <>
              Ты ответил правильно <br /> на{' '}
              <span className={styles.correctAnswers}>12</span> вопросов и
              сделал <span className={styles.wrongAnswers}>6</span> ошибок.
            </>
          )}
          {hasCorrectAnswers && !hasWrongAnswers && (
            <>Ты ответил правильно на все вопросы. Так держать!</>
          )}
          {!hasCorrectAnswers && (
            <>
              Ты не ответил ни на один вопрос.
              <br />
              Попробуй еще!
            </>
          )}
        </p>
      </div>
      <Button>Попробовать еще</Button>
    </>
  );
};

export default Result;
