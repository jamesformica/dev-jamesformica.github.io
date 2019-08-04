import React, { useState } from 'react'

import { loadMarkdown, imgStyles, buildName } from '../helpers/projectHelper'
import Link from './Link'
import Carousel from './Carousel'
import InViewport from '../helpers/InViewport'
import styles from './Project.css'

const Project = ({ project }) => {
  const [isInViewport, setIsInViewport] = useState(false)

  const isCarousel = !!project.image.push
  const hasWebsite = !!project.url
  const hasCode = !!project.github

  return (
    <div className={styles[project.style]}>
      <div className={styles.project}>
        <div className={styles.image}>
          {isInViewport && isCarousel && (
            <Carousel>
              {project.image.map(img => (
                <Link
                  noHover
                  to={project.url}
                  key={img}
                  style={imgStyles(img, project.bgPosition)}
                  className={styles.image}
                />
              ))}
            </Carousel>
          )}

          {isInViewport && !isCarousel && (
            <Link noHover to={project.url} style={imgStyles(project.image, project.bgPosition)} />
          )}

          {!isInViewport && (
            <InViewport inViewport={() => setIsInViewport(true)} className={styles.viewport} />
          )}
        </div>

        <div className={styles.content}>
          <div className={styles.mainTitle}>
            <h2 className={styles.name}>
              {buildName(project.name, styles.titleBold, styles.title)}
            </h2>

            <span className={styles.links}>
              {hasWebsite && <Link primary to={project.url}>website</Link>}
              {hasWebsite && hasCode && ' / '}
              {hasCode && <Link to={project.github}>code</Link>}
            </span>
          </div>

          {!!project.markdown && (
            <div
              className={styles.more}
              dangerouslySetInnerHTML={{ __html: loadMarkdown(project.markdown) }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
