'use client'
import React from 'react';
import styles from "./styles.module.scss";
import Header from '@/components/header/Header';
import BusinessInfo from '@/components/business-content/BusinessInfo';

export default function Home() {

  return(
    <div className={styles.page}>
      <Header customClassName={styles.headerContainer} />
      <BusinessInfo />
    </div>

  );
};