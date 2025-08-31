import React from 'react';
import styles from "./HeroSection.module.scss";
import Image from "next/image";
import DemoImage from "../../../../public/demo-screen.png";

const HeroSection = () => {

  return(
    <div className={styles.hero}>
      <div className={styles.leftSide}>
        <div className={styles.blueBg}>
          <div className={styles.whiteBg}>
            <h2><span>機能を選ぶ、コストを減らす</span><br/>
                シンプルで続けやすいCRM                   
            </h2>
            <h3>好きなページを選んで追加していくだけで<br/>
                自社サービスに最適なカスタマイズが可能    
            </h3>
            <div className={styles.buttons}>
              <button className={styles.entryButton}>無料ではじめる<span>&rarr;</span></button>
              <button className={styles.requestInfoButton}>資料請求はこちら<span>&rarr;</span></button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
      <Image
        src={DemoImage}
        alt="デモ画面"
        className={styles.demoImage} 
        />
      </div>
    </div>

  );
};
export default HeroSection;
