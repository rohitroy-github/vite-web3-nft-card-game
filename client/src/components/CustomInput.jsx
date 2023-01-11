import React from "react";

import styles from "../styles";

//regular expression format for input
const regex = /^[A-Za-z0-9]+$/;

const CustomInput = ({label, placeHolder, value, handleValueChange}) => (
  <>
    <label htmlFor="name" className={styles.label}>
      {label}
    </label>
    <input
      type="text"
      placeholder={placeHolder}
      value={value}
      onChange={(e) => {
        //restrict typing any special characters other than the format specified
        if (e.target.value === "" || regex.test(e.target.value))
          handleValueChange(e.target.value);
      }}
      className={styles.input}
    />
  </>
);

export default CustomInput;
