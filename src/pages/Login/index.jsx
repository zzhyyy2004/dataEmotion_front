import React, { useState } from "react";
import styles from "./styles.module.scss";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";
import { Header } from "../../components/Header";
import { useAuth } from "../../Hooks/verify";
import { redirect } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  async function submit(event) {
    event.preventDefault();

    try {
      const isTrue = await signIn(email, password);

      if (isTrue) {
        // redirect("/home");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <form onSubmit={submit}>
          <div>
            <i>
              <IoMailOpenOutline />
            </i>
            <input
              type="text"
              placeholder="email:"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <i>
              <IoKeyOutline />
            </i>
            <input
              type="password"
              placeholder="senha:"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className={styles.button}>
            <button type="submit">Entre</button>
          </div>
        </form>
      </main>
    </div>
  );
}
