import React from "react";
import styles from "./styles.module.scss";
import relatedimg from "../../assets/img_related.svg";
import bgImg from "../../assets/logo_semnome.svg";
export function Section2() {
  return (
    <div className={styles.container}>
      <section>
        <div>
          <h1>O que é?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            et nemo doloremque dolorem repudiandae, voluptatem deserunt
            perferendis vitae, illo quam natus adipisci alias. Ullam velit,
            laboriosam similique reiciendis dolorem quos. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quae sunt delectus, voluptatibus
            culpa maxime facere rerum porro quis accusantium vitae recusandae,
            beatae quasi repudiandae ipsam deleniti perspiciatis unde ducimus
            cumque!
          </p>
          <button>mais informarções</button>
          <img src={bgImg} alt="" />
        </div>
      </section>
    </div>
  );
}
