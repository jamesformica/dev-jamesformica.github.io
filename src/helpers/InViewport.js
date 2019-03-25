import React, { useState, useRef, useEffect } from 'react'
import noop from 'lodash/noop'

import Observer from './Observer'
import Scroller from './Scroller'

const Monitor = global.window.IntersectionObserver ? Observer : Scroller

const InViewport = ({ className, children, inViewport }) => {
  const [isInViewport, setIsInViewport] = useState(false)
  const monitorEl = useRef()
  const uuid = useRef()

  const deferRender = Child => (isInViewport ? Child : null)

  useEffect(() => {
    uuid.current = Monitor.monitor(monitorEl.current, () => {
      setIsInViewport(true)
      Monitor.remove(uuid)
      inViewport()
    })
  }, [])

  return (
    <div ref={monitorEl} className={className}>
      {typeof children === 'function'
        ? children({ isInViewport, deferRender })
        : isInViewport && children
      }
    </div>
  )
}

InViewport.defaultProps = {
  inViewport: noop,
  className: '',
}

export default InViewport
