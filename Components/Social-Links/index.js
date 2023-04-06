import React from 'react'
import styles from './SocialLinks.module.scss'
function SocialLinks() {
  return (
    <section className={styles.socialLinksSection}>
    <div className={`container ${styles.socialLinksContainer}`}>
        <span>LinkedIn</span>
        <span>GitHub</span>
        <span>Facebook</span>
        <span>Instagram</span>
    </div>
    </section>
  )
}

export default SocialLinks;