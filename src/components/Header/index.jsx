import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/dataemotion logo (7).svg";
export function Header() {
  return (
    <div className={styles.container}>
      <header>
        <img src={Logo} alt="Logo Do software" />
      </header>
    </div>
  );
}
