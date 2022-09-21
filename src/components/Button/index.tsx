import styles from "./Button.module.css";

import toDoLogo from "../../assets/Logo.svg";
import { PlusCircle } from "phosphor-react";

export function Button() {
  return (
    <button className={styles.button}>
      Criar <PlusCircle size={15.97} />
    </button>
  );
}
