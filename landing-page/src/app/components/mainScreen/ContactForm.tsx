import React from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {

  return(
    <div className={styles.contactFormContainer}>
      <div className={styles.title}>
        <h1>お問い合わせ</h1>
        <p>Sales Finderに関するご質問、導入のご相談など、お気軽にお問い合わせください</p>
      </div>
      <div className={styles.contactForm}>
        <div className={styles.twoColumn}>
          <div className={styles.item}>
            <label htmlFor="company-name">会社名&emsp;<span>必須</span></label>
            <input id="company-name" type="text" placeholder="株式会社セールスファインダー"/>
          </div>
          <div className={styles.item}>
            <label htmlFor="name">お名前</label>
            <input id="name" type="text" placeholder="山田 太郎"/>
          </div>
          <div className={styles.item}>
            <label htmlFor="email">メールアドレス</label>
            <input id="email" type="text" placeholder="yamada@example.com"/>
          </div>
          <div className={styles.item}>
            <label htmlFor="phone-number">電話番号</label>
            <input id="phone-number" type="text" placeholder="03-1234-5678" />
          </div>
          <div className={styles.item}>
            <label htmlFor="type">お問い合わせの種別</label>
            <select name="type" id="type">
              <option value="" selected hidden>お問い合わせの種別を選択してください</option>
              <option value="">導入のご相談</option>
              <option value="">料金・プランについて</option>
              <option value="">機能について</option>
              <option value="">サポートについて</option>
              <option value="">その他</option>
            </select>
          </div>
        </div>
        <div className={styles.freeForm}>
          <label htmlFor="content">お問い合わせ内容</label>
          <textarea id="content" type="text" placeholder="ご質問やご要望をお聞かせください" />
        </div>
        <input type="submit" value="送信する" className={styles.submitButton} />
      </div>
    </div>
  )
};

export default ContactForm;