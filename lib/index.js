'use strict';

function bodyResize() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'padding';

  var docEl = document.documentElement;
  var bodyEl = document.body;

  docEl.style.width = '100%';
  docEl.style.height = '100%';
  var offsetWidth = docEl.offsetWidth;
  var offsetHeight = docEl.offsetHeight;
  var scaleX = offsetWidth / width;
  var scaleY = offsetHeight / height;
  var top = 0;
  var left = 0;
  var scale = void 0;
  if (type === 'padding') {
    if (scaleX < scaleY) {
      scale = scaleX;
      top = (offsetHeight - height * scale) / 2;
    } else if (scaleX > scaleY) {
      scale = scaleY;
      left = (offsetWidth - width * scale) / 2;
    } else {
      scale = scaleX;
    }
  } else if (type === 'width') {
    scale = scaleX;
  } else if (type === 'height') {
    scale = scaleY;
  } else if (type === 'full') {}

  scale = scale.toFixed(6);
  top = top.toFixed(4);
  left = left.toFixed(4);
  bodyEl.style.width = width + 'px';
  bodyEl.style.height = height + 'px';
  bodyEl.style.transformOrigin = 'left top 0px';
  bodyEl.style.webkitTransformOrigin = 'left top 0px';
  bodyEl.style.MozTransformOrigin = 'left top 0px';

  if (type === 'full') {
    bodyEl.style.transform = 'scale(' + scaleX + ', ' + scaleY + ')';
    bodyEl.style.webkitTransform = 'scale(' + scaleX + ', ' + scaleY + ')';
    bodyEl.style.MozTransform = 'scale(' + scaleX + ', ' + scaleY + ')';
  } else {
    bodyEl.style.transform = 'scale(' + scale + ')';
    bodyEl.style.webkitTransform = 'scale(' + scale + ')';
    bodyEl.style.MozTransform = 'scale(' + scale + ')';
  }
  bodyEl.style.marginLeft = left + 'px';
  bodyEl.style.marginTop = top + 'px';
}

function domResize(dom, parentDom) {
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1920';
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '1080';
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'padding';

  var offsetWidth = parentDom.offsetWidth;
  var offsetHeight = parentDom.offsetHeight;
  var scaleX = offsetWidth / width;
  var scaleY = offsetHeight / height;
  var top = 0;
  var left = 0;
  var scale = void 0;
  if (type === 'padding') {
    if (scaleX < scaleY) {
      scale = scaleX;
      top = (offsetHeight - height * scale) / 2;
    } else if (scaleX > scaleY) {
      scale = scaleY;
      left = (offsetWidth - width * scale) / 2;
    } else {
      scale = scaleX;
    }
  } else if (type === 'width') {
    scale = scaleX;
  } else if (type === 'height') {
    scale = scaleY;
  } else if (type === 'full') {}

  scale = scale.toFixed(6);
  top = top.toFixed(4);
  left = left.toFixed(4);
  dom.style.width = width + 'px';
  dom.style.height = height + 'px';
  dom.style.transformOrigin = 'left top 0px';
  dom.style.webkitTransformOrigin = 'left top 0px';
  dom.style.MozTransformOrigin = 'left top 0px';

  if (type === 'full') {
    dom.style.transform = 'scale(' + scaleX + ', ' + scaleY + ')';
    dom.style.webkitTransform = 'scale(' + scaleX + ', ' + scaleY + ')';
    dom.style.MozTransform = 'scale(' + scaleX + ', ' + scaleY + ')';
  } else {
    dom.style.transform = 'scale(' + scale + ')';
    dom.style.webkitTransform = 'scale(' + scale + ')';
    dom.style.MozTransform = 'scale(' + scale + ')';
  }
  dom.style.marginLeft = left + 'px';
  dom.style.marginTop = top + 'px';
}

module.exports = {
  bodyResize: bodyResize,
  domResize: domResize
};