import uuid from 'uuid/v4'
import debounce from 'lodash/debounce'

const isElementInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  const extraThreshold = global.window.innerHeight * 0.3

  return rect.top < global.window.innerHeight + extraThreshold
}

/**
 * A class that monitors elements by via `window.addEventListener('scroll')`.
 * Call the `.monitor` and `.remove` functions to operate.
 */
class Scroller {
  constructor() {
    this.observed = []
    this.onScroll = debounce(this.isInViewport, 50)
  }

  /**
   * Adds an element to the observed list
   * @param {HTMLElement} element - The element to observe
   * @param {function} callback - The function to call when the element is in the viewport
   * @return {string} A uuid that can be used to unobserve the element
   */
  monitor = (element, callback) => {
    if (this.observed.length === 0) {
      global.window.addEventListener('scroll', this.onScroll)
    }

    const newObserver = { id: uuid(), element, callback }
    this.observed.push(newObserver)

    global.window.requestAnimationFrame(this.isInViewport)
    return newObserver.id
  }

  /**
   * Removes an element from the observed list
   * @param {string} id - The uuid that corresponds to the monitored element
   */
  remove = (id) => {
    this.observed = this.observed.filter(o => o.id !== id)

    if (this.observed.length === 0) {
      global.window.removeEventListener('scroll', this.onScroll)
    }
  }

  isInViewport = () => {
    this.observed.forEach(({ element, callback }) => {
      if (isElementInViewport(element)) {
        callback()
      }
    })
  }
}

export default new Scroller()
