import Image from "next/image";

import styles from "./Button.module.scss";

import iconDice from "../../assets/icon-dice.svg";

export function Button(props: { onClick: any; className: any }) {
  return (
    <button
      onClick={() => props.onClick()}
      className={`${props.className} ${styles.btn}`}
    >
      <Image src={iconDice} alt={"Icon Dice"} width={20} height={20} />
    </button>
  );
}
