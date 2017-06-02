/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-06-01 04:33:34
 * @modify date 2017-06-01 04:33:34
 * @desc [scale methods]
*/

function getScale(width = 1920, height = 1080) {
  let docEl = document.documentElement
  let bodyEl = document.body
  // set docEl
  docEl.style.width = '100%'
  docEl.style.height = '100%'
  let scale, top, left
  let offsetWidth = docEl.offsetWidth
  let offsetHeight = docEl.offsetHeight
  let scaleX = offsetWidth / width
  let scaleY = offsetHeight / height
  if (scaleX < scaleY) {
    scale = scaleX
    top = (offsetHeight - height * scale) / 2
    left = 0
  } else if (scaleX > scaleY) {
    scale = scaleY
    top = 0
    left = (offsetWidth - width * scale) / 2
  } else {
    scale = scaleX // 同步放大/缩小
    top = 0
    left = 0
  }
  scale = scale.toFixed(6)
  top = top.toFixed(4)
  left = left.toFixed(4)
  bodyEl.style.width = `${width}px`
  bodyEl.style.height = `${height}px`
  bodyEl.style.transformOrigin = 'left top 0px'
  bodyEl.style.webkitTransformOrigin = 'left top 0px'
  bodyEl.style.MozTransformOrigin = 'left top 0px'
  bodyEl.style.transform = `scale(${scale})`
  bodyEl.style.webkitTransform = `scale(${scale})`
  bodyEl.style.MozTransform = `scale(${scale})`
  bodyEl.style.marginLeft = `${left}px`
  bodyEl.style.marginTop = `${top}px`
}

module.exports = {
  getScale,
}
