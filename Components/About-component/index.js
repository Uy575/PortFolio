import React from 'react'
import styles from './About.module.scss'
import Services from '../Services-component'
import ContactMe from '../ContactMe-component'
import Image from 'next/image'
import profileImage from '../../public/aboutImage.jpg'
function AboutServiceContact() {
  return (
   <section className={styles.aboutServiceContactSection} id='About' >
    <div className={`container ${styles.mainContainer}`}>
    <div className={styles.contentContainer}> 
    <div>
        <div className={styles.imageDiv}> <Image src={profileImage} height={470} width={350} className={styles.profileImage}/></div>
        </div>
        <div className={styles.aboutContent}>
         <h1> REACT And NEXT <br/> DEVELOPER CURRENTLY <br/> BASED IN PAKISTAN </h1>
        <p><strong>I Am A Software Engineer & A Web Developer</strong> <br/>
        I believe that the web has the power to connect people and ideas like never before, and as a developer, I feel a deep sense of responsibility to create websites that are not only visually appealing but also functional and accessible to everyone.
   
        </p>
          </div>
          </div>
      <hr className={styles.hr}/>
        </div>
     <Services/>
     <ContactMe/>

   </section>
  )
}

export default AboutServiceContact