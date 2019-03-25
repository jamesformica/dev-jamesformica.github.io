import uuid from 'uuid/v4'

const observerOptions = {
  rootMargin: '0px 0px 30% 0px'
}

/**
 * A class that monitors elements with an `IntersectionObserver`.
 * Call the `.monitor` and `.remove` functions to operate.
 */
class Observer {
  constructor() {
    this.observed = []
    this.isInViewport = this.isInViewport.bind(this)
  }

  /**
   * Adds an element to the observed list
   * @param {HTMLElement} element - The element to observe
   * @param {function} callback - The function to call when the element is in the viewport
   * @return {string} A uuid that can be used to unobserve the element
   */
  monitor = (element, callback) => {
    this.initialiseIfNeedsBe()

    const newObserver = { id: uuid(), element, callback }

    this.observed.push(newObserver)
    this.observer.observe(element)

    return newObserver.id
  }

  /**
   * Removes an element from the observed list
   * @param {string} id - The uuid that corresponds to the monitored element
   */
  remove = (id) => {
    const observed = this.observed.find(o => o.id === id)

    if (observed) {
      this.observer.unobserve(observed.element)
      this.observed = this.observed.filter(o => o.id !== id)
    }
  }

  initialiseIfNeedsBe = () => {
    if (!this.observer) {
      this.observer = new IntersectionObserver(this.isInViewport, observerOptions)
    }
  }

  isInViewport = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { callback } = this.observed.find(o => o.element === entry.target)
        callback()
      }
    })
  }
}

export default new Observer()
