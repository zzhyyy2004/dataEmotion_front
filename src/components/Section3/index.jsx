import React from "react";
import styles from "./styles.module.scss";
import relatedimg from "../../assets/img_related.svg";
import bgImg from "../../assets/logo_semnome.svg";
import clock from "../../assets/clock2.svg";
import celular from "../../assets/phone.png";
import face from "../../assets/recognisition.png";

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
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              soluta facilis aperiam at facere. Debitis fugiat iure molestias
              voluptatum praesentium.
            </p>
          </div>
        </div>

        <div>
          <div>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              soluta facilis aperiam at facere. Debitis fugiat iure molestias
              voluptatum praesentium.
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
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              soluta facilis aperiam at facere. Debitis fugiat iure molestias
              voluptatum praesentium.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
