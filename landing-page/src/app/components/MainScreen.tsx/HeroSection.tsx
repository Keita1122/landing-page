import styles from "./HeroSection.module.scss";
import SubExplanation from './SubExplanation';

const HeroSection = () => {

  return(
    <div className={styles.hero}>
      <div className={styles.bgSize}>
        <div className={styles.mainScreen}>
          <div className={styles.leftSection}>
            <div className={styles.letterContainer}>
              <h1><span>”高い・使いづらい”にサヨナラ</span><br/>
                  ほしい機能だけを集めてカスタマイズできるCRM
              </h1>
              <div className={styles.leadButtons}>
                <button className={styles.materialButton}>資料請求する</button>
                <button>無料ではじめる</button>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>    
            <div className={styles.popCircle}>
              <p>全業種<br/>対応型</p>  
            </div>  
          </div>
        </div>
        <div className={styles.subExplanation}>
          <div className={styles.leftExplain}>
            <div className={styles.content}>
              <h2>基本料金は無料</h2>
              <h3>余分な機能にコストをかけず、<br/>
                  事業に必要な機能だけを選んで導入できます。<br/>
                  <strong>スモールスタートから大規模運用まで柔軟に対応</strong>
              </h3>
            </div>
          </div>
          <div className={styles.rightExplain}>
            <SubExplanation />
          </div>
        </div>
      </div>
    </div>

  );
};
export default HeroSection;
