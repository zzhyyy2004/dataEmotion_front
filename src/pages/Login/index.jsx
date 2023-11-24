import React from "react";
import styles from "./styles.module.scss";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";
import { Header } from "../../components/Header";

export default function Login() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <form>
          <div>
            <i>
              <IoMailOpenOutline />
            </i>
            <input type="text" placeholder="email:" />
          </div>
          <div>
            <i>
              <IoKeyOutline />
            </i>
            <input type="text" placeholder="senha:" />
          </div>
          <div className={styles.button}>
            <button>Entre</button>
          </div>
        </form>
      </main>
    </div>
  );
}
