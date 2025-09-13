import React from "react";
import styles from "./FeatureIntroduction.module.scss";

const FeatureIntroduction = () => {

  return(
    <div className={styles.featureContainer}>
      <h1>主な機能紹介</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>顧客管理（CRM）</h2>
          <p>詳細</p>
        </div>
        <div className={styles.card}>
          <h2>営業支援（SFA）</h2>
          <p>営業支援機能</p>
        </div>
        <div className={styles.card}>
          <h2>マーケティング支援（MA）</h2>
          <p>詳細</p>
        </div>
        <div className={styles.card}>
          <h2>AI分析</h2>
          <p>詳細</p>
        </div>
        <div className={styles.card}>
          <h2>業界特化管理</h2>
          <p>詳細</p>
        </div>
        <div className={styles.card}>
          <h2>社内人事管理</h2>
          <p>分析機能</p>
        </div>
      </div>
    </div>
  )
};

export default FeatureIntroduction;