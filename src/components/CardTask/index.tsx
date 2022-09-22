import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./CardTask.module.css";

export function CardTask() {
  const [isChecked, setIsChecked] = useState(false);

  function toggleCheck() {
    setIsChecked(!isChecked);
  }
  return (
    <div className={styles.container}>
      <span onClick={toggleCheck}>
        <input type="checkbox" checked={isChecked} />
        <span></span>
      </span>

      <h1
        style={{
          color: `${isChecked ? "#808080" : "#F2F2F2"}`,
          textDecoration: `${isChecked ? "line-through" : "blink"}`,
        }}
      >
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </h1>
      <button type="button">
        <Trash className={styles.icon} />
      </button>
    </div>
  );
}
