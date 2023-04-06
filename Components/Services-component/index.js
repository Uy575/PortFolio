import React from "react";
import styles from "./services.module.scss";
import Image from "next/image";
import userInterface from '../../public/userinterface.png'
import websiteDesign   from '../../public/websitedesign.png'
import reactAppLogo from '../../public/reactapp.png'
function Services() {
  return (

      <div className='container' id="Services">
         <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <h2 className={styles.heading}>What do i help?</h2>
          <p>Creating responsive layouts,building and styling user interface components,optimizing website performance,
          Keeping up with new web technologies and best practices to ensure that your work is efficient, scalable, and user-friendly.
              </p>
          
        </div>
        <div className={styles.serviceCard}>
          <div><span><Image src={userInterface} height={50}/></span><span>User Interface Designs</span></div>
          <div><span><Image src={websiteDesign}  height={50}/></span><span> Website Designs</span></div>
          <div><span><Image src={reactAppLogo} height={50}/></span><span></span>React And Next Apps</div>


        </div>
         </div>
        <hr className={styles.hr}/>
      </div>

  );
}

export default Services;
