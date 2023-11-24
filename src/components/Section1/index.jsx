import React, { useState } from "react";
import styles from "./styles.module.scss";
import relatedimg from "../../assets/img_related.svg";

const texts = {
  1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem fugiatporro dolorum vel ipsa? Saepe sit vitae architecto corrupti,officiis cumque omnis fugiat minima in ipsum recusandae quas faceredeleniti.",
  2: "2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem fugiatporro dolorum vel ipsa? Saepe sit vitae architecto corrupti,officiis cumque omnis fugiat minima in ipsum recusandae quas faceredeleniti.",
  3: "3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem fugiatporro dolorum vel ipsa? Saepe sit vitae architecto corrupti,officiis cumque omnis fugiat minima in ipsum recusandae quas faceredeleniti.",
};

export function Section1() {
  const [selectedText, setSelectedText] = useState(1);

  return (
    <div className={styles.container}>
      <section>
        <h1>O que é?</h1>
        <div>
          <img src={relatedimg} alt="imagem relacionada" />
          <p>{texts[selectedText]}</p>
        </div>
        <nav>
          <ul>
            <li
              onClick={() => setSelectedText(1)}
              className={`${selectedText === 1 ? styles.selected : ""}`}
            >
              O que é?
            </li>
            <li
              onClick={() => setSelectedText(2)}
              className={`${selectedText === 2 ? styles.selected : ""}`}
            >
              Como?
            </li>
            <li
              onClick={() => setSelectedText(3)}
              className={`${selectedText === 3 ? styles.selected : ""}`}
            >
              Para que?
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
