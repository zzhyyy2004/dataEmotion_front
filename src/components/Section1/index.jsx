import React, { useState } from "react";
import styles from "./styles.module.scss";
import relatedimg from "../../assets/img_related.svg";

const texts = {
  1: "O Projeto DataEmotion, uma parceria entre Hapvida e DataEmotion, utiliza tecnologias avançadas de análise e sensoriamento para monitorar saúde mental, focando em padrões de sono e expressões faciais.",
  2: "Usando Esp32, a pulseira monitora sono e frequência cardíaca, enquanto o reconhecimento facial em um app interpreta expressões em tempo real. Dados centralizados permitem uma análise completa do estado emocional.",
  3: "Facilitar o acompanhamento remoto de psiquiatras e psicólogos ao fornecer dados precisos sobre sono e emoções, melhorando a eficácia das intervenções personalizadas.",
};

export function Section1() {
  const [selectedText, setSelectedText] = useState(1);

  return (
    <div className={styles.container}>
      <section>
        <h1>O que é?</h1>
        <div>
          <div>
            <img src={relatedimg} alt="imagem relacionada" />
          </div>
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
