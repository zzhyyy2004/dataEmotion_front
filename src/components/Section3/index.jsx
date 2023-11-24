import React from "react";
import styles from "./styles.module.scss";
import relatedimg from "../../assets/img_related.svg";
import bgImg from "../../assets/logo_semnome.svg";
import clock from "../../assets/clock2.svg";
import celular from "../../assets/phone.png";
import face from "../../assets/recognisition.png";
import pacMed from "../../assets/pacxmed.svg";
export function Section3() {
  return (
    <div className={styles.container}>
      <section>
        <div>
          <img
            src={clock}
            alt="relogio de controle cardiaco"
            className="photo"
          />
          <div>
            <h2>Pulseira Sensorial</h2>
            <p>
              A pulseira monitora padrões de sono, movimentos e frequência
              cardíaca de forma discreta e confortável, permitindo avaliações
              detalhadas para cuidados personalizados.
            </p>
          </div>
        </div>

        <div>
          <div>
            <h2>App </h2>
            <p>
              O aplicativo proporciona acesso fácil a insights em tempo real
              sobre emoções e sono, facilitando uma gestão proativa da saúde
              mental.
            </p>
          </div>
          <img
            src={celular}
            alt="imagem ilustrativa do app"
            className="photo"
          />
        </div>

        <div>
          <img src={face} alt="reconhecimento facial" className="photo" />
          <div>
            <h2>Análise</h2>
            <p>
              O reconhecimento facial oferece uma abordagem inovadora para
              compreender emoções em tempo real, possibilitando análises
              precisas para intervenções oportunas no bem-estar emocional.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h2>Conexão</h2>
            <p>
              A conexão eficiente entre pacientes e profissionais de saúde
              simplifica ajustes precisos nos tratamentos, promovendo uma
              interação remota prática para o cuidado à distância.
            </p>
          </div>
          <img src={pacMed} alt="imagem ilustrativa do app" className="photo" />
        </div>
      </section>
    </div>
  );
}
