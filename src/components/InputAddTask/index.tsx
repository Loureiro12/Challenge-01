import styles from "./InputAddTask.module.css";

export function InputAddTask() {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Adicione uma nova tarefa"
    />
  );
}
