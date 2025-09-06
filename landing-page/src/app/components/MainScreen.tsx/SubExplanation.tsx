"use client";
import React from "react";
import Image from "next/image";
import styles from "./SubExplanation.module.scss";

const images = [
  "/dashboard-image.png",
  "/factory-image.png",
  "/sns-image.png",
  "/business-card-image.png",
  "/invoice-image.png",
  "/mail-image.png",
  "/project-image.png",
  "/calendar-image.png",
];

const SubExplanation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {[...images, ...images].map((src, i) => (
          <div key={i} className={styles.slide}>
            <Image
              src={src}
              alt={`carousel-${i}`}
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubExplanation;
