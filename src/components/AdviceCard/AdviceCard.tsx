import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

import { Button } from "../Button/Button";

import dividerDesktop from "../../assets/pattern-divider-desktop.svg";

import styles from "./AdviceCard.module.scss";

export function AdviceCard() {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  });

  const getData = () => {
    axios("	https://api.adviceslip.com/advice")
      .then((resp) => {
        setAdvice(resp.data.slip.advice);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.container}>
      <p className={styles.advice}>ADVICE #117</p>

      <div className={styles.quoteContainer}>
        &ldquo;
        {isLoading ? <p>...</p> : advice}
        &rdquo;
      </div>

      <Image src={dividerDesktop} alt="divider" className={styles.img} />

      <Button onClick={getData} className={styles.btn} />
    </div>
  );
}
