import React from "react";
import styles from "./styles.module.scss";
import { IconType } from "react-icons";
import { IoMailOpenOutline } from "react-icons/io5";

export function Input({ icon: Icon, name, ...rest }) {
  return (
    <div className={styles.input}>
      {Icon && <Icon size={24} color="#6F767E" />}
      <input type="text" name={name} {...rest} />
    </div>
  );
}
