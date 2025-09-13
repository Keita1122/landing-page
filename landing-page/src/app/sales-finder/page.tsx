import React from 'react';
import styles from "./styles.module.scss";
import Header from '../components/header/Header';
import HeroSection from '../components/mainScreen/HeroSection';
import Product from '../components/mainScreen/ProductIntroduction';
import Feature from '../components/mainScreen/FeatureIntroduction'
import PricePlan from '../components/mainScreen/PricePlan';
import ComponentExplanation from '../components/mainScreen/ComponentExplanation';
import ContactForm from '../components/mainScreen/ContactForm';

export default function Home() {

  return(
    <div className={styles.page}>
      <Header />
      <HeroSection />
      <Product />
      <Feature />
      <PricePlan />
      <ComponentExplanation />
      <ContactForm />
      
    </div>
  )
};