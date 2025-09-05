'use client'
import React, { useState, useEffect } from 'react';
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "../../../../public/new-logo.png";
import { motion } from "framer-motion";
import  Link  from "next/link";
import clsx from 'clsx';

type HeaderProps = {
  customClassName? : string;
};

const Header = ({
  customClassName
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const page = document.querySelector(`.${styles.page}`);
    if(!page)return;

    const handleScroll = () => {
      setIsScrolled(page.scrollTop > 5);
    };

    page.addEventListener("scroll", handleScroll);
    return () => page.removeEventListener("scroll", handleScroll);
  }, []);

  return(    
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ duration: 2 }}
      className={styles.page}
      >
      <div className={clsx(styles.header,{ [styles.scrolledActive]: isScrolled },customClassName)}>
        <Link href={`/salesfinder-home`}>
          <Image src={Logo} alt="ロゴ" className={styles.logo}/>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href={`/business-content`}>
                <div className={styles.navText}>
                  <span className={styles.en}>service</span>
                  <span className={styles.jp}>事業内容</span>
                </div>
              </Link>
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
    </motion.div>  
  );
};
export default Header;