import React, { useState } from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/dataemotion logo (7).svg";

export function Footer() {
  return (
    <div className={styles.container}>
      <footer>
        <img src={Logo} alt="Logo Do software" />
        <p>Global Solution 2023 - Engenharia de Software 1ESR</p>
      </footer>
    </div>
  );
}
