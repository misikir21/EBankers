import React from "react";
import styles from "../style";
import Button from "./Button";
const Cta = () => {
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
     sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div>
      <h2>Let's try our service now</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis
        unde vero deserunt maiores debitis?s
      </p>
    </div>
    <div>
      <Button />
    </div>
  </section>;
};
export default Cta;
