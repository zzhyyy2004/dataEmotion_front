import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Header } from "../../components/Header";
import { IoKeyOutline } from "react-icons/io5";
import { Section1 } from "../../components/Section1";
import { Section2 } from "../../components/Section2";
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Section1 />
        <Section2 />
      </main>
    </div>
  );
}
