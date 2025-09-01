'use client'
import React from 'react';
import styles from "./styles.module.scss";
import Header from '@/components/header/Header';
import CompanySection from '@/components/company-profile/CompanySection';


export default function Home() {

  return(
    <div className={styles.page}>
      <Header customClassName={styles.header} />
      <CompanySection />
    </div>
  )
};
