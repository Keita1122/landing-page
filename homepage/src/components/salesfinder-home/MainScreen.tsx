import React from 'react';
import styles from "./MainScreen.module.scss";
import Image from "next/image";
import BgImage from "../../../public/bg-img1.png";
import SfLogo from "../../../public/new-big-logo.png";
import { motion } from "framer-motion";

const MainScreen = () => {

  return(

    <div className={styles.mainContents}>
      <Image src={BgImage} alt="バックグラウンド" className={styles.backgroundImage} />
      <div className={styles.twoColumns}>
        <motion.h2
          initial={{opacity: 0, x: "10%" ,y: "35%"}}
          animate={{opacity: 1, x: "10%" ,y: "30%"}}
          transition={{ duration: 2.5 }}
          className={styles.mainMessage}
          >
          成功モデルに固執した営業を脱却せよ<br />
          その先に必ず新しい「発見」が生まれる
        </motion.h2>

        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 2.5}}
          className={styles.serviceWindow}
          >
          <div className={styles.logoWindow}>
            <motion.a 
              href="#"
              className={styles.sfLogo}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [1, 1, 1],
                filter: [
                  "drop-shadow(0 0 5px rgba(255,255,255,0))",
                  "drop-shadow(0 0 30px rgba(181, 253, 255, 1))",
                  "drop-shadow(0 0 5px rgba(255,255,255,0))"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              >
              <Image src={SfLogo} alt="sales finderロゴ" className={styles.logo}/>
            </motion.a>
          </div>
          

        </motion.div>
      </div>
    </div>
  );
};
export default MainScreen;