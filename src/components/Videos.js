import React from 'react'

import Container from './Container'
import styles from './Videos.css'

const links = [
  { title: 'FEQs with James Formica', id: 'PL6vN-6mxfs-0QmU43evhzFE56Fy04P7qo' },
  { title: 'CSS Challenges', id: 'PL6vN-6mxfs-1nD8LpXT4oybypN1R0kAeK' },
]

const Videos = () => (
  <Container>
    <div className={styles.videos} dir="ltr">
      {links.map(link => (
        <div className={styles.video} key={link.title}>
          <p>{link.title}</p>
          <iframe
            title={link.title}
            width="400"
            height="240"
            src={`https://www.youtube.com/embed/videoseries?list=${link.id}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a
            target="_blank"
            href={`https://www.youtube.com/playlist?list=${link.id}`}
            rel="noopener noreferrer"
            className={styles.overlay}
          />
        </div>
      ))}
    </div>
  </Container>
)

export default Videos
