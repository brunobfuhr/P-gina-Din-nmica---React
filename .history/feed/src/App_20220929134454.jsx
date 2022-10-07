import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Conteudo } from './components/Conteudo';
import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.content}>
        <Sidebar />
      </div>
      <div>
        <Conteudo />
      </div>
    </div>
  )
}

export default App
