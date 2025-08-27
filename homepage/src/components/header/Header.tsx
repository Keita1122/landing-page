'use client'
import React, { useState, useEffect } from 'react';
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "../../../public/new-logo.png";
import clsx from 'clsx';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const page = document.querySelector(`.${styles.page}`);
    if(!page)return;

    const handleScroll = () => {
      console.log("scroll fired:", window.scrollY); 
      console.log("page.scrollTop:", page.scrollTop);
      setIsScrolled(page.scrollTop > 5);
    };

    page.addEventListener("scroll", handleScroll);
    return () => page.removeEventListener("scroll", handleScroll);
  }, []);

  return(      
    <div className={clsx(styles.header,{ [styles.scrolledActive]: isScrolled })}>
      <a href='/page.tsx'>
        <Image src={Logo} alt="ロゴ" className={styles.logo}/>
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">
              <div className={styles.navText}>
                <span className={styles.en}>service</span>
                <span className={styles.jp}>事業内容</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className={styles.navText}>
                <span className={styles.en}>company</span>
                <span className={styles.jp}>会社概要</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className={styles.navText}>
                <span className={styles.en}>media</span>
                <span className={styles.jp}>メディア</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className={styles.navText}>
                <span className={styles.en}>contact</span>
                <span className={styles.jp}>お問い合わせ</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;