import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { IoMailOpenOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";

export function Hamburguer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > 10) {
        setOpen(false);
      }
      const checkbox = document.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.checked = false;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <div className={styles.container}>
      <div>
        <label>
          <input type="checkbox" onClick={() => setOpen(!open)} />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>

        {open && (
          <nav
            className={`${
              open ? styles["side-drawer-open"] : styles["side-drawer-hide"]
            }`}
          >
            <ul>
              <li>
                <i>
                  <IoMailOpenOutline />
                </i>
                <p>gusflopes@hotmail.com</p>
              </li>
              <li>
                <i>
                  <GoPerson />
                </i>
                <p>gustavo Lopes</p>
              </li>
              <li>
                <i>
                  <AiOutlineLogout />
                </i>
                <a href="/">sair</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
