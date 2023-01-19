import { Button } from "../Button/Button";

import styles from "./AdviceCard.module.scss";

export function AdviceCard() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>ADVICE #117</p>
        <div>
          <p>"</p>
          <p>Advice here, here, here, here, here, here</p>
          <p>"</p>
        </div>
      </div>
      <Button />
    </div>
  );
}
