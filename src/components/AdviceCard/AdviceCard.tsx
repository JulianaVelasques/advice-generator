import { useState, useEffect } from "react";
import Image from "next/image";

import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";

import dividerDesktop from "../../assets/pattern-divider-desktop.svg";

import styles from "./AdviceCard.module.scss";

export function AdviceCard() {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIsLoading(true);
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((resp) => resp.json())
      .then((data) => {
        setAdvice(data.slip.advice);
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
        {isLoading ? <Loader /> : <>&ldquo; {advice} &rdquo; </>}
      </div>

      <Image src={dividerDesktop} alt="divider" className={styles.img} />

      <Button onClick={getData} className={styles.btn} />
    </div>
  );
}
