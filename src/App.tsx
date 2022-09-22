import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { InputAddTask } from "./components/InputAddTask";

import styles from "./App.module.css";

import "./global.css";
import { IsHaveTask } from "./components/IsHaveTask";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <InputAddTask />
        <Button />
      </div>
      <div className={styles.container}>
        <div className={styles.tasks}>
          <div className={styles.headerTasks}>
            <p>
              Tarefas criadas <span className={styles.counter}>5</span>
            </p>
            <p>
              Concluídas <span className={styles.counter}>2 de 5</span>
            </p>
          </div>
          <IsHaveTask />
        </div>
      </div>
    </>
  );
}

export default App;
