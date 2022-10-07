import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Body } from './components/Body';
import styles from './App.module.css';
import './global.css';
import { Footer } from './components/Footer';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.content}>
        <Sidebar />
      </div>

      <div className={styles.content}>
        <Body />
      </div>
      <div className={styles.content}>
        <Footer />
      </div>

    </div>
  )
}

export default App
