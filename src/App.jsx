import Card from './assets/components/Card';
import Logo from './assets/components/Logo';
import Footer from './assets/components/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
