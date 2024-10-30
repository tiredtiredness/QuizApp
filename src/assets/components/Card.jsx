import { useState } from 'react';
import Counter from './Counter';
import Button from './Button';

import styles from './Card.module.css';
import ButtonIcon from './ButtonIcon';

const Card = () => {
  const [page, setPage] = useState('result'); // welcome / question /result
  // для отображения текста при разном результате
  const hasCorrectAnswers = true;
  const hasWrongAnswers = true;
  return (
    <>
      <main className={styles.main}>
        {page === 'welcome' && (
          <>
            <div className={styles.mainTitleWrapper}>
              <h1 className={styles.heading}>Добро пожаловать</h1>
              <p>на викторину по странам и столицам!</p>
            </div>
            <img
              src='public/question.png'
              alt=''
              className={styles.welcomeImage}
            />
            <div className={styles.mainCounterWrapper}>
              <p>Выбери количество вопросов:</p>
              <Counter />
            </div>
            <Button>Начать</Button>
          </>
        )}
        {page === 'question' && (
          <>
            <button className={styles.closeButton}>
              <ButtonIcon type='cross' size='small' color='default' />
            </button>
            <div className={styles.question}>
              <img
                src='src/assets/images/flags/flag.png'
                alt='Флаг'
                className={styles.flag}
              />
              <p>Флаг какой страны изображен?</p>
            </div>
            <ol className={styles.answers}>
              <li className={styles.answersOption}>Камерун</li>
              <li className={styles.answersOption}>Нигерия</li>
              <li className={styles.answersOption}>
                Центрально-Африканская Республика
              </li>
              <li className={styles.answersOption}>Гаити</li>
            </ol>
            <div className={styles.answerPanel}>
              <Button>Ответить</Button>
              <p className={styles.questionCounter}>1 / 18</p>
            </div>
          </>
        )}
        {page === 'result' && (
          <>
            <img
              src='public/result.png'
              alt=''
              className={styles.resultImage}
            />
            <div className={styles.resultWrapper}>
              <h1 className={styles.heading}>Результат</h1>
              <p className={styles.resultDescription}>
                {hasCorrectAnswers && hasWrongAnswers && (
                  <>
                    Ты ответил правильно <br /> на{' '}
                    <span className={styles.correctAnswers}>12</span> вопросов и
                    сделал <span className={styles.wrongAnswers}>6</span>{' '}
                    ошибок.
                  </>
                )}
                {hasCorrectAnswers && !hasWrongAnswers && (
                  <>Ты ответил правильно на все вопросы. Так держать!</>
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
        )}
      </main>
    </>
  );
};

export default Card;
