/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-06-01 04:33:34
 * @modify date 2017-07-24 11:17:12
 * @desc [scale methods]
*/

function bodyResize (width = 1920, height = 1080, type = 'padding') {
  const docEl = document.documentElement
  const bodyEl = document.body
  // 设置docEl初始样式
  docEl.style.width = '100%'
  docEl.style.height = '100%'
  const offsetWidth = docEl.offsetWidth
  const offsetHeight = docEl.offsetHeight
  const scaleX = offsetWidth / width
  const scaleY = offsetHeight / height
  let top = 0
  let left = 0
  let scale = 1 // 初始化为1
  if (type === 'padding') {
    if (scaleX < scaleY) {
      scale = scaleX
      top = (offsetHeight - height * scale) / 2
    } else if (scaleX > scaleY) {
      scale = scaleY
      left = (offsetWidth - width * scale) / 2
    } else {
      // 同步放大/缩小
      scale = scaleX
    }
  } else if (type === 'width') {
    scale = scaleX
  } else if (type === 'height') {
    scale = scaleY
  } else if (type === 'full') {
    // do nothing
  }

  scale = scale.toFixed(6)
  top = top.toFixed(4)
  left = left.toFixed(4)
  bodyEl.style.width = `${width}px`
  bodyEl.style.height = `${height}px`
  bodyEl.style.transformOrigin = 'left top 0px'
  bodyEl.style.webkitTransformOrigin = 'left top 0px'
  bodyEl.style.MozTransformOrigin = 'left top 0px'
  // 全部铺满
  if (type === 'full') {
    bodyEl.style.transform = `scale(${scaleX}, ${scaleY})`
    bodyEl.style.webkitTransform = `scale(${scaleX}, ${scaleY})`
    bodyEl.style.MozTransform = `scale(${scaleX}, ${scaleY})`
  } else {
    bodyEl.style.transform = `scale(${scale})`
    bodyEl.style.webkitTransform = `scale(${scale})`
    bodyEl.style.MozTransform = `scale(${scale})`
  }
  bodyEl.style.marginLeft = `${left}px`
  bodyEl.style.marginTop = `${top}px`
}

function domResize (dom, parentDom, width = '1920', height = '1080', type = 'padding') {
  const offsetWidth = parentDom.offsetWidth
  const offsetHeight = parentDom.offsetHeight
  const scaleX = offsetWidth / width
  const scaleY = offsetHeight / height
  let top = 0
  let left = 0
  let scale = 1
  if (type === 'padding') {
    if (scaleX < scaleY) {
      scale = scaleX
      top = (offsetHeight - height * scale) / 2
    } else if (scaleX > scaleY) {
      scale = scaleY
      left = (offsetWidth - width * scale) / 2
    } else {
      // 同步放大/缩小
      scale = scaleX
    }
  } else if (type === 'width') {
    scale = scaleX
  } else if (type === 'height') {
    scale = scaleY
  } else if (type === 'full') {
    // do nothing
  }

  scale = scale.toFixed(6)
  top = top.toFixed(4)
  left = left.toFixed(4)
  dom.style.width = `${width}px`
  dom.style.height = `${height}px`
  dom.style.transformOrigin = 'left top 0px'
  dom.style.webkitTransformOrigin = 'left top 0px'
  dom.style.MozTransformOrigin = 'left top 0px'
  // 全部铺满
  if (type === 'full') {
    dom.style.transform = `scale(${scaleX}, ${scaleY})`
    dom.style.webkitTransform = `scale(${scaleX}, ${scaleY})`
    dom.style.MozTransform = `scale(${scaleX}, ${scaleY})`
  } else {
    dom.style.transform = `scale(${scale})`
    dom.style.webkitTransform = `scale(${scale})`
    dom.style.MozTransform = `scale(${scale})`
  }
  dom.style.marginLeft = `${left}px`
  dom.style.marginTop = `${top}px`
}

module.exports = {
  bodyResize,
  domResize
}
