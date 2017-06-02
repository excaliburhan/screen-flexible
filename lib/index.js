'use strict';

function getScale() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;

  var docEl = document.documentElement;
  var bodyEl = document.body;

  docEl.style.width = '100%';
  docEl.style.height = '100%';
  var scale = void 0,
      top = void 0,
      left = void 0;
  var offsetWidth = docEl.offsetWidth;
  var offsetHeight = docEl.offsetHeight;
  var scaleX = offsetWidth / width;
  var scaleY = offsetHeight / height;
  if (scaleX < scaleY) {
    scale = scaleX;
    top = (offsetHeight - height * scale) / 2;
    left = 0;
  } else if (scaleX > scaleY) {
    scale = scaleY;
    top = 0;
    left = (offsetWidth - width * scale) / 2;
  } else {
    scale = scaleX;
    top = 0;
    left = 0;
  }
  scale = scale.toFixed(6);
  top = top.toFixed(4);
  left = left.toFixed(4);
  bodyEl.style.width = width + 'px';
  bodyEl.style.height = height + 'px';
  bodyEl.style.transformOrigin = 'left top 0px';
  bodyEl.style.webkitTransformOrigin = 'left top 0px';
  bodyEl.style.MozTransformOrigin = 'left top 0px';
  bodyEl.style.transform = 'scale(' + scale + ')';
  bodyEl.style.webkitTransform = 'scale(' + scale + ')';
  bodyEl.style.MozTransform = 'scale(' + scale + ')';
  bodyEl.style.marginLeft = left + 'px';
  bodyEl.style.marginTop = top + 'px';
}

module.exports = {
  getScale: getScale
};