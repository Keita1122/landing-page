'use client'
import React, { useState, useEffect } from 'react';
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "../../../../public/new-logo-color.png";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ duration: 2 }}
      className={styles.page}
      >
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
                    <span>製品紹介</span>
                  </div>
                </Link>
              </li>
              <li>
                <a href="#">
                  <div className={styles.navText}>
                    <span>機能紹介</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className={styles.navText}>
                    <span>料金プラン</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className={styles.navText}>
                    <span>サポート</span>
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
    </motion.div>  
  );
};
export default Header;