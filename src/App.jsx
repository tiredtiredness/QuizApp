import { useState } from 'react';

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Welcome from './pages/Welcome/Welcome';
import Question from './pages/Question/Question';
import Result from './pages/Result/Result';
import Footer from './components/Footer/Footer';

import styles from './App.module.css';

function App() {
  const [page, setPage] = useState('welcome'); // welcome / question / result
  return (
    <div className={styles.wrapper}>
      <Header />
      <Card>
        {page === 'welcome' && <Welcome />}
        {page === 'question' && <Question />}
        {page === 'result' && <Result />}
      </Card>
      <Footer />
    </div>
  );
}

export default App;
