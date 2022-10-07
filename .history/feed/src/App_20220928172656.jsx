import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.content}>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
