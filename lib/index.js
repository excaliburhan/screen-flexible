'use strict';

function getScale() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;

  var bodyEl = document.body;
  var scale = 1;
  var top = 0;
  var left = 0;
  var rect = bodyEl.getBoundingClientRect();
  var offsetWidth = rect.width;
  var offsetHeight = rect.height;
  var scaleX = offsetWidth / width;
  var scaleY = offsetHeight / height;
  if (scaleX < scaleY) {
    scale = scaleX;
    top = (offsetHeight - height * scale) / 2;
  } else if (scaleX > scaleY) {
    scale = scaleY;
    left = (offsetWidth - width * scale) / 2;
  } else {
    scale = scaleX;
  }
  scale = scale.toFixed(6);
  top = top.toFixed(4);
  left = left.toFixed(4);
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