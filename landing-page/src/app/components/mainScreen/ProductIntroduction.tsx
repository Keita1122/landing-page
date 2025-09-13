import React from "react";
import styles from "./ProductIntroduction.module.scss";


const Feature = () => {

  return(
    <div className={styles.featureContainer}> 
      <div className={styles.bgTriangle}></div> 
      <h1>Sales Finderとは</h1>
      <h2>「使いやすい」「無駄なコストをかけない」に特化したCRMです</h2>
      <div className={styles.need}>
        <h2>CRMの利用における３つの課題</h2>
        <span>利用料金が高い</span><span>複雑で使いづらい</span><span>社内に浸透しない</span>
        
        <div className={styles.triangle}></div>
        <div className={styles.solution}>
          <h2>使いたい機能だけ使えればすべて解決！！</h2>
        </div>
      </div>
      <div className={styles.cardGrid}>
        <section className={styles.grid}>
          <div className={styles.featureCard}>
            <h3>Sales Finderが使いやすい理由</h3>
            <p>１．シンプルなデザイン設計</p>
            <p>２．使用頻度の高い機能に限定した基本構成</p>
            <p>３．入力負担の少ないアクセシビリティ</p>
          </div>
          <div className={styles.featureCard}>
            <h3>コスト削減の仕組み</h3>
            <span>コンポーネント型CRMの実現が最大の強み</span>
            <p>使いたい機能を必要最低限で導入できることにより、<br/>
              大規模な開発コストや使わない機能への課金が防止できます
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>社内浸透への取り組み</h3>
            <span>ユーザーが自分でコンポーネントを選び、<br/>
                  必要性を訴えられる環境づくりを実現
            </span>
            <p>「こんな機能あったらいいな」を考える機会を増やすことで、<br/>
              社内へ発信する意識を醸成し、CRMの社内浸透を促進します
            </p>
          </div>
        </section>
      </div>
    </div>
  )
};
export default Feature;