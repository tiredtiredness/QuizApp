import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';

import styles from './Question.module.css';

const Question = () => {
  return (
    <>
      <button className={styles.closeButton}>
        <Icon type='cross' size='small' color='default' />
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
        <li>
          <button className={styles.answersOption}>Камерун</button>
        </li>
        <li>
          <button className={styles.answersOption}>Нигерия</button>
        </li>
        <li>
          <button className={styles.answersOption}>
            Центрально-Африканская Республика
          </button>
        </li>
        <li>
          <button className={styles.answersOption}>Гаити</button>
        </li>
      </ol>
      <div className={styles.answerPanel}>
        <Button disabled={true}>Ответить</Button>
        <p className={styles.questionCounter}>1 / 18</p>
      </div>
    </>
  );
};

export default Question;
