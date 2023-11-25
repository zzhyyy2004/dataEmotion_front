import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Header } from "../../components/Header";
import { IoKeyOutline } from "react-icons/io5";
import { Section1 } from "../../components/Section1";
import { Section2 } from "../../components/Section2";
import { Section3 } from "../../components/Section3";
import { Footer } from "../../components/Footer";
import { redirectDocument } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    console.log("---home");
    console.log(JSON.parse(user));
    console.log("---home");
    if (user === null) {
      window.location = "/";
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <Footer />
    </div>
  );
}
