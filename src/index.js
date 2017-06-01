/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-06-01 04:33:34
 * @modify date 2017-06-01 04:33:34
 * @desc [scale methods]
*/

function getScale(width = 1920, height = 1080) {
  let bodyEl = document.body
  let scale = 1
  let top = 0
  let left = 0
  let rect = bodyEl.getBoundingClientRect()
  let offsetWidth = rect.width
  let offsetHeight = rect.height
  let scaleX = offsetWidth / width
  let scaleY = offsetHeight / height
  if (scaleX < scaleY) {
    scale = scaleX
    top = (offsetHeight - height * scale) / 2
  } else if (scaleX > scaleY) {
    scale = scaleY
    left = (offsetWidth - width * scale) / 2
  } else {
    scale = scaleX // 同步放大/缩小
  }
  scale = scale.toFixed(6)
  top = top.toFixed(4)
  left = left.toFixed(4)
  bodyEl.style.transform = `scale(${scale})`
  bodyEl.style.webkitTransform = `scale(${scale})`
  bodyEl.style.MozTransform = `scale(${scale})`
  bodyEl.style.marginLeft = `${left}px`
  bodyEl.style.marginTop = `${top}px`
}

module.exports = {
  getScale,
}
