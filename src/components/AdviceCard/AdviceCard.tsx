import useSWR from "swr";

import { Button } from "../Button/Button";

import styles from "./AdviceCard.module.scss";

const fetcher = (url: any) => fetch(url).then((r) => r.json());

export function AdviceCard() {
  const { data, error, isLoading } = useSWR(
    "https://api.adviceslip.com/advice",
    fetcher
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>ADVICE #117</p>
        <div>
          <p className={styles.quotes}> &ldquo;</p>
          {isLoading && <h1>...</h1>}
          <p>{data?.slip.advice}</p>
          <p className={styles.quotes}>&rdquo;</p>
        </div>
      </div>
      {/* <Button onClick={getData} /> */}
    </div>
  );
}
