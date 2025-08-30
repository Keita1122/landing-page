'use client'
import React from 'react';
import styles from "./BusinessInfo.module.scss";
import Image from "next/image"
import sfImage from "../../../public/sf-image.png";
import itConsul from "../../../public/it-consul3.jpg";
import salesConsul from "../../../public/sales-consul3.jpg";


const BusinessInfo = () => {

  return(
    <div className={styles.main}>
      <div className={styles.explanation}>
        <h1>事業内容</h1>
        <p>Sales Finderは、営業・マーケティング部門を持つすべての企業に向けて<br/>
          CRM、営業コンサルティング、DX・ITコンサルティングをご提供します
        </p>
      </div>
      <div className={styles.businesses}>
        <div className={styles.content}>
          <h3 className={styles.title}>CRM事業</h3>
          <p>ビジネスモデルに応じた最適なカスタマイズを実現する<br/>
          ”コンポーネント型”のシステム導入・運用支援を行います 
          </p>
          <div className={styles.details}>
          <Image src={sfImage} alt="モニター" className={styles.forecast} />
        </div>

        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>営業コンサルティング事業</h3>
          <p>大手金融機関、不動産、人材紹介など幅広い業界出身者の<br/>
            知見を凝縮し、結果が出る営業への強化と支援をいたします
          </p>
          <div className={styles.details}>
            <Image src={salesConsul} alt="営業コンサル" className={styles.forecast} />
          </div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>DX・ITコンサルティング事業</h3>
          <p>社内業務に関わる様々なシステムの受託開発・導入や<br/>
            DX化・IT化に関するご相談を専門家が直接お受けします 
          </p>
          <div className={styles.details}>
            <Image src={itConsul} alt="ITコンサル" className={styles.forecast} />
          </div>
        </div>
      </div>
    </div>
  )
};
export default BusinessInfo;