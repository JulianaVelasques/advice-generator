import Image from "next/image";

import iconDice from "../../assets/icon-dice.svg";

export function Button() {
  return (
    <div>
      <Image src={iconDice} alt={"Icon Dice"} width={30} height={30} />
    </div>
  );
}
