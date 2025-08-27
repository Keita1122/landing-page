'use client'
import React, {useState} from 'react';
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "../../../public/new-logo.png";

//import CircularNavigation from '@/components/CIrcularNavigation';

export default function Home (){

  return(
    <div className={styles.page}>
      <div className={styles.header}>
        <button><Image src={Logo} alt="ロゴ" className={styles.logo}/></button>
        <nav>
          <ul>
            <li>会社概要</li>
            <li>事業内容</li>
            <li>会社概要</li>
            <li>お問い合わせ</li>
          </ul>
        </nav>
      </div>

      <div className={styles.main}>
        
      </div>
    </div>

  )
};