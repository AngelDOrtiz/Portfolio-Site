/* eslint-disable max-len */
import React from 'react';
import styles from './Home.css';
import { Link } from 'react-router-dom';


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
          
          <div className={styles.jacket} id="jacket"></div>
          <div id="modal" className={styles.modalBox}>
            <div className={styles.modalContent}>
              <img className={styles.modalImage} src="https://img.giglio.com/images/prodZoom/C47428.010_1.jpg" alt="pink jacket"/>
              <p className={styles.modalName}>Pink Parka</p>
              <p className={styles.modalPrice}>$119.95</p>
            </div>
          </div>

          <div className={styles.wand} id="wand"></div>
          <div id="modal" className={styles.modalBox}>
            <div className={styles.modalContent}>
              <img className={styles.modalImage} src="https://static1.funidelia.com/63290-f6_big2/blue-wand-with-heart-for-girls.jpg" alt="toy wand"/>
              <p className={styles.modalName}>Powerful Wand</p>
              <p className={styles.modalPrice}>$1.85</p>
            </div>
          </div>

          <img className={styles.mBoxLeft} src="https://cdn.discordapp.com/attachments/804704049626349579/919980657210454107/20211202_205219.jpg" alt="My daughter, Alice" />

          <div className={styles.mBoxMiddle}>
          
            <div className={styles.mBoxMiddleTop}>
           
              <h1>HELLO!</h1>
          
            </div>
         
            <div className={styles.mBoxMiddleBottom}>
              
              <div className={styles.buttonBox}>
                
                <div className={styles.buttonRow1}>
                  
                  <button className={styles.button} id="githubButton">
                    <a href="https://github.com/AngelDOrtiz" >
                      <p className={styles.buttonText}>GitHub</p>
                      
                    </a>
                  </button>
                  
                  <button className={styles.button} id="linkedinButton">
                    <a href="https://www.linkedin.com/in/angel-ortiz/">
                      <p>linkedIn</p>  
                    </a>
                  </button>

                </div>
                
                <div className={styles.buttonRow2}>
                 
                  <Link to="/projects" className={styles.link}>
                    <button className={styles.button} id="projectsButton" >
                      <p>Projects</p>
                    </button>
                  </Link>

                  <button className={styles.button}>
                    <p>About Me</p>
                  </button>

                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.sunglasses} id="sunglasses"> </div>
          <div id="modal" className={styles.modalBox}>
            <div className={styles.modalContent}>
              <img className={styles.modalImage} src="https://cdn.shopify.com/s/files/1/0350/5401/products/AV-2_front_04ef3ffb-de41-4b9d-8b0b-1e31ccbcb435.jpeg?v=1568893657" alt="sunglasses"/>
              <p className={styles.modalName}>Aviator Sunglasses</p>
              <p className={styles.modalPrice}>$95.99</p>
            </div>
          </div>

          <div className={styles.sippyCup} id="sippyCup"></div>
          <div id="modal" className={styles.modalBox}>
            <div className={styles.modalContent}>
              <img className={styles.modalImage} src="https://i5.walmartimages.com/asr/01669672-0ec5-48a8-ba34-ab2bb3b42ccc_1.18f11148f98b3a1bba48d83144dd1811.jpeg" alt="sippy cup" />
              <p className={styles.modalName}>Sippy Cup</p>
              <p className={styles.modalPrice}>$18.28</p>
            </div>
          </div>

          <div className={styles.smile}></div>
          <div id="modal" className={styles.modalBox}>
            <div className={styles.modalContent}>
              <img className={styles.modalImage} src="https://cdn.discordapp.com/attachments/804704049626349579/922316734621421588/20210607_114528.jpg" alt="sippy cup" />
              <p className={styles.modalName}>Alice</p>
              <p className={styles.modalPrice}>Priceless</p>
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
