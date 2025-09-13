import React from "react";
import styles from "./PricePlan.module.scss";
import { FaCheck as CheckIcon } from "react-icons/fa";


const PricePlan = () => {

  return(
    <div className={styles.priceContainer}>
      <h1>料金プラン</h1>
      <div className={styles.threePlans}>
        <div className={styles.planContainer}>
          <div className={styles.title}>
            <h2>基本プラン</h2>
            <p>まずは無料でスタート</p>
          </div>
          <div className={styles.price}>
            <div className={styles.flex}>
              <h2>￥０</h2>
              <p>/ 月</p>
            </div>
          </div>
          <div className={styles.explanation}>
            <div className={styles.item}>
              <CheckIcon className={styles.checkIcon} />
              <p>初期費用無料</p>
            </div>
            <div className={styles.item}>
              <CheckIcon className={styles.checkIcon} />
              <p>基本料金無料</p>
            </div>
            <div className={styles.item}>
              <CheckIcon className={styles.checkIcon} />
              <p>10ライセンスまで無料</p>
            </div>
            <div className={styles.item}>
              <CheckIcon className={styles.checkIcon} />
              <p>基本サポート</p>
            </div>
          </div>
        </div>
        <div className={styles.planContainer}>
          <div className={styles.title}>
            <h2>追加コンポーネント</h2>
            <p>使いたい機能を選んで導入</p>
          </div>
          <div className={styles.price}>
            <div className={styles.flex}>
              <h2>￥500～</h2>
              <p>/ 月</p>
            </div>
            <p className={styles.annotation}>※1ライセンスごとの月額です</p>
          </div>
          <div className={styles.explanation}>
            <div className={styles.item}>
              <CheckIcon className={styles.checkIcon} />
              <p>基本プランの全機能</p>
            </div>
            <div className={styles.item}>
              <CheckIcon className={styles.checkIcon} />
              <p>導入したコンポーネント</p>
            </div>
            <div className={styles.item}>
              <CheckIcon className={styles.checkIcon} />
              <p>月単位での追加・削除が可能</p>
            </div>
            <div className={styles.item}>
              <CheckIcon className={styles.checkIcon} />
              <p>優先サポート</p>
            </div>
          </div>
        </div>
        <div className={styles.planContainer}>
          <div className={styles.title}>
            <h2>カスタムプラン</h2>
            <p>独自開発ソリューション</p>
          </div>
          <div className={styles.price}>
            <div className={styles.flex}>
              <h2>応相談</h2>
            </div>
          </div>
          <div className={styles.explanation}>
            <div className={styles.item}>
              <CheckIcon className={styles.checkIcon} />
              <p>独自コンポーネント開発</p>
            </div>
            <div className={styles.item}>
              <CheckIcon className={styles.checkIcon} />
              <p>公開コンポーネント開発</p>
            </div>
            <div className={styles.item}>
              <CheckIcon className={styles.checkIcon} />
              <p>コンポーネント解説付き</p>
            </div>
            <div className={styles.item}>
              <CheckIcon className={styles.checkIcon} />
              <p>個社別サポート</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PricePlan;