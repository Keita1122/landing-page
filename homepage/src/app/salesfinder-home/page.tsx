'use client'
import React from 'react';
import styles from "./styles.module.scss";

import Header from '@/components/header/Header';
import MainScreen from '@/components/main-screen/MainScreen';


export default function Home (){

  return(
    <div className={styles.page}>
      <Header />     
      <div className={styles.main}>
        <MainScreen />        
      </div>
      
      <div className={styles.companySection}>

      </div>
    </div>
  )
};