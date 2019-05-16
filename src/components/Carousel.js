import React from 'react'
import NukaCarousel from 'nuka-carousel'

import styles from './Carousel.css'

const Previous = ({ previousSlide }) => (
  <button className={styles.arrow} onClick={previousSlide} type="button">&lt;</button>
)

const Next = ({ nextSlide }) => (
  <button className={styles.arrow} onClick={nextSlide} type="button">&gt;</button>
)

const Carousel = ({ children }) => (
  <NukaCarousel
    wrapAround
    className={styles.nuka}
    renderBottomCenterControls={null}
    renderCenterLeftControls={Previous}
    renderCenterRightControls={Next}
  >
    {children}
  </NukaCarousel>
)

export default Carousel
