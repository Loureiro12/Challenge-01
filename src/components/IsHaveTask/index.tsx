import { FileDotted } from "phosphor-react";
import styles from "./IsHaveTask.module.css";

export function IsHaveTask() {
  return (
    <div className={styles.container}>
      <FileDotted size={56} />
      <h1>Você ainda não tem tarefas cadastradas</h1>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
