import styles from './Logo.module.css';

const Logo = () => {
  return (
    <header className={styles.logo}>
      <img
        src='../../public/logo.svg'
        alt='Логотип Quiz по странам и столицам'
      />
    </header>
  );
};

export default Logo;
