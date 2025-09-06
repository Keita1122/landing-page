'use client'
import React, { useState, useEffect } from 'react';
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "../../../../public/sf-logo.png";
import  Link  from "next/link";

type HeaderProps = {
  customClassName? : string;
};

const Header = ({
  customClassName
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return(      
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerInner}>
        <Link href={`/salesfinder-home`}>
          <Image src={Logo} alt="ロゴ" className={styles.logo}/>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href={`/business-content`}>
                <div className={styles.navText}>
                  <span className={styles.jp}>製品紹介</span>
                  <span className={styles.en}>product</span>
                </div>
              </Link>
            </li>
            <li>
              <a href="#">
                <div className={styles.navText}>
                  <span className={styles.jp}>機能紹介</span>
                  <span className={styles.en}>feature</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={styles.navText}>
                  <span className={styles.jp}>料金プラン</span>
                  <span className={styles.en}>pricing
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={styles.navText}>
                  <span className={styles.jp}>コンポーネント</span>
                  <span className={styles.en}>components</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={styles.navText}>
                  <span className={styles.jp}>サポート</span>
                  <span className={styles.en}>support</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={styles.navText}>
                  <button className={styles.hoverButton}>無料ではじめる</button>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div> 
  );
};
export default Header;