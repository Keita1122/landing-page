import React from 'react';
import styles from "./MainScreen.module.scss";
import Image from "next/image";
import BgImage from "../../../public/bg-img1.png";
import { motion } from "framer-motion";

const MainScreen = () => {

  return(

    <div className={styles.mainContents}>
      <Image src={BgImage} alt="バックグラウンド" className={styles.backgroundImage} />
      <motion.h2
        initial={{opacity: 0, x: "10%" ,y: "35%"}}
        animate={{opacity: 1, x: "10%" ,y: "30%"}}
        transition={{ duration: 2.5 }}
        className={styles.mainMessage}
        >
        成功モデルに固執した営業を脱却せよ<br />
        その先に必ず新しい「発見」が生まれる
      </motion.h2>
    </div>
  );
};
export default MainScreen;