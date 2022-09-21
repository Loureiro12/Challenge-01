import styles from "./InputAddTask.module.css";

import { PlusCircle } from "phosphor-react";

export function InputAddTask() {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Adicione uma nova tarefa"
    />
  );
}
