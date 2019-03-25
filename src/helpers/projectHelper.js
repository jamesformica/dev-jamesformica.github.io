import React from 'react'

import * as images from '../images'
import * as markdownFiles from '../markdown'

export const imgStyles = (image, bgPosition) => ({
  width: '100%',
  backgroundImage: `url('${images[image]}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  border: 0,
  ...(bgPosition && { backgroundPosition: bgPosition }),
})

export const loadMarkdown = markdown => (
  new Promise((resolve) => {
    global.fetch(markdownFiles[markdown])
      .then(response => response.text())
      .then(md => resolve(md))
  })
)

export const buildName = (name, even, odd) => (
  name.map((n, i) => (
    <span key={n} className={i % 2 ? even : odd}>{n}</span>
  ))
)
