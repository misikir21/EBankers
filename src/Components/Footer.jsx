import React from "react";
import styles, { logo } from "../style";
import { footerLinks, socialMedia } from "../constants";
function Footer() {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div
        className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
      ></div>
    </footer>
  );
}

export default Footer;
