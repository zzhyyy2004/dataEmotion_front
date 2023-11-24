import React, { useState } from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/Logo.svg";
import { Hamburguer } from "../Hamburguer";

export function Header() {
  return (
    <div className={styles.container}>
      <header>
        <img src={Logo} alt="Logo Do software" />
        <Hamburguer />
      </header>
    </div>
  );
}
