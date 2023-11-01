/**
 * Scroll to the top of the page in a specified duration(ms) and smoothness(ms)
 * ref: https://stackoverflow.com/a/52478645/3556531
 * @param {String} elementID
 * @param {Int} scrollDuration
 * @param {Int} offset
 * @param {Int} scrollSmoothness
 */

// - add a criterion to terminate scrolling if target can't be reached
// - add callback upon scrolling termination

function fancyAScroll (
  elementID = 'main-content',
  scrollDuration = 500,
  offset = 0, // I  had to use 120 to compensate for a sticky header
  scrollSmoothness = 10,
  callback = null
) {
  const accuracyBuffer = 10
  try {

    // #1 Calculate the final offset position to scroll-to
    const element = document?.getElementById(elementID)
    const bodyRect = document?.body?.getBoundingClientRect().top
    const elementRect = element?.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset // final - target position to scroll

    // #2 calculate steps & direction (up or down)
    const scrollStepUnit = offsetPosition / (scrollDuration / scrollSmoothness)
    const scrollStepDirection = offsetPosition > window?.scrollY ? '' : '-'
    const scrollStepY = `${scrollStepDirection}${scrollStepUnit}`

    // #3 keep on relatively scrolling untill reached to the destination
    let previousY = -1
    const scrollInterval = setInterval(() => {
      let presentY = window?.scrollY
      let targetRangeReached =
        offsetPosition - accuracyBuffer < presentY &&
        presentY < offsetPosition + accuracyBuffer

      if (targetRangeReached || previousY == presentY) {
        clearInterval(scrollInterval)
        if (callback != null && typeof callback == "function") {
          callback()
        }
       } else {
        window.scrollBy(0, scrollStepY)
        previousY = presentY
      }
    }, scrollSmoothness)
  }
  catch (error) {
    console.error('Error @scrollTopWithDuration\n', error)
  }
}

export default fancyAScroll
