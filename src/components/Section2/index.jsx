import React from "react";
import styles from "./styles.module.scss";
import relatedimg from "../../assets/img_related.svg";
import bgImg from "../../assets/logo_semnome.svg";

export function Section2() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <section>
        <div>
          <h1>DataEmotion</h1>
          <p>
            Descubra o DataEmotion: inovação que monitora saúde emocional
            remotamente para transformar o bem-estar saúdavel de modo que irá
            ajudar a analisar a saúde mental de seu paciente.
            <p>
              Este avançado sistema ajuda em intervenções precisas,
              identificando distúrbios emocionais precocemente, elevando a
              qualidade de vida.
            </p>
          </p>
          <button>mais informarções</button>
        </div>
        <img src={bgImg} alt="Logo da empresa" />
      </section>
    </div>
  );
}
