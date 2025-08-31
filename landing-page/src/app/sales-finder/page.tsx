import React from 'react';
import styles from "./styles.module.scss";
import Header from '../components/header/Header';
import HeroSection from '../components/MainScreen.tsx/HeroSection';

export default function Home() {

  return(
    <div className={styles.page}>
      <Header />
      <HeroSection />
    </div>

  )
};
