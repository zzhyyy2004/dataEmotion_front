import React from "react";
import styles from "./styles.module.scss";
import relatedimg from "../../assets/img_related.svg";
export function Section1() {
  return (
    <div className={styles.container}>
      <section>
        <h1>O que é?</h1>
        <div>
          <img src={relatedimg} alt="imagem relacionada" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem fugiat
            porro dolorum vel ipsa? Saepe sit vitae architecto corrupti,
            officiis cumque omnis fugiat minima in ipsum recusandae quas facere
            deleniti.
          </p>
        </div>
        <nav>
          <ul>
            <li>O que é?</li>
            <li>Como?</li>
            <li>Para que?</li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
