import React, { useState } from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/dataemotion logo (7).svg";

export function Header() {
  return (
    <div className={styles.container}>
      <header>
        <img src={Logo} alt="Logo Do software" />
        {/* <ul className="nav-list">
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
        <button>dnhadua</button> */}
      </header>
    </div>
  );
}
