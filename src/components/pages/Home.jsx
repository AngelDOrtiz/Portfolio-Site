/* eslint-disable max-len */
import React, { useState } from 'react';
import styles from './Home.css';


const Home = () => {
  


  return (
    <div className={styles.home}>
      
      <div className={styles.topRow}>

        <div className={styles.icon}>
          <p className={styles.a}>A</p>
        </div>
        
        <div className={styles.header}>
          <p className={styles.ngel}>NGEL ORTIZ</p>
        </div>

      </div>
      
      <div className={styles.middleRow}>
        <section className={styles.middleBox}>
          <img className={styles.mBoxLeft} src="https://cdn.discordapp.com/attachments/804704049626349579/919980657210454107/20211202_205219.jpg" alt="My daughter, Alice" />

          <div className={styles.mBoxMiddle}>
            <div className={styles.mBoxMiddleTop}>
              <h1>HELLO!</h1>
            </div>
            <div className={styles.mBoxMiddleBottom}>
              <div className={styles.buttonBox}>
                <div className={styles.buttonRow1}>
                  <button className={styles.button}>

                  </button>
                  <button className={styles.button}>

                  </button>
                </div>
                
                <div className={styles.buttonRow2}>
                  <button className={styles.button}>

                  </button>
                  <button className={styles.button}>

                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <img className={styles.mBoxRight} src="https://cdn.discordapp.com/attachments/804704049626349579/919980680337850418/20211202_205228.jpg" alt="My daughter, Alice"/>
        </section>
      </div>

      <div className={styles.bottomRow}>

      </div>

    </div>
  );
};

export default Home;
