import React from 'react'

import Container from './Container'
import styles from './Videos.css'

const links = [
  { title: 'FEQs with James Formica', id: 'PL6vN-6mxfs-0QmU43evhzFE56Fy04P7qo' },
  { title: 'CSS Challenges', id: 'PL6vN-6mxfs-1nD8LpXT4oybypN1R0kAeK' },
]

const Videos = () => (
  <Container>
    <div className={styles.videos}>
      {links.map(link => (
        <div className={styles.video}>
          <p>{link.title}</p>
          <iframe
            title={link.title}
            width="400"
            height="240"
            src={`https://www.youtube.com/embed/videoseries?list=${link.id}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullscreen
          />
        </div>
      ))}
    </div>
  </Container>
)

export default Videos
