import logo from '../../assets/images/logo.svg';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <img
      src={logo}
      alt='Логотип Quiz по странам и столицам'
      className={styles.logo}
    />
  );
};

export default Logo;
