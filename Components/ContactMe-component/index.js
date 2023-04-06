import React from 'react'
import styles from './contactMe.module.scss'
import Image from 'next/image';
import twitterLogo from '../../public/twitter.png'
import linkedinLogo from '../../public/linkedin.png'
import mLogo from '../../public/m.png'
import githubLogo from '../../public/github.png'
function ContactMe() {
  return (

    <div className='container'>
        <div className={styles.contactContentContainer}>

        <h1>Let's start by Saying Hi!</h1>
        <button>Email Me</button>
        </div>
        <div className={styles.footerContainer}>
            <div className={styles.iconsDiv}>
                <span><Image src={twitterLogo} height={30}/></span>
                <span><Image src={linkedinLogo} height={30}/></span>
                <span><Image src={mLogo} height={30}/></span>
                <span><Image src={githubLogo} height={30}/></span>
            </div>
            <div className={styles.creditDiv}>
                <span> Made with Love | </span> <span> Usama </span>
            </div>
        </div>
    </div>
  
  )
}

export default ContactMe;