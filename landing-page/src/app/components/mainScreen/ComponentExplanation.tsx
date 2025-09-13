import React from "react";
import styles from "./ComponentExplanation.module.scss";


const ComponentExplanation = () => {

  return(
    <div className={styles.componentContainer}>
      <div className={styles.title}>
        <h1>コンポーネント型CRMの仕組み</h1>
        <p>追加機能をページ（コンポーネント）として加えることで、柔軟なカスタマイズを実現します</p>
      </div>

    </div>
  )
};

export default ComponentExplanation;