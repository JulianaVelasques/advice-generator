import Image from "next/image";

import iconDice from "../../assets/icon-dice.svg";

export function Button(props: { onClick: any }) {
  return (
    <button onClick={() => props.onClick()}>
      <Image src={iconDice} alt={"Icon Dice"} width={30} height={30} />
    </button>
  );
}
