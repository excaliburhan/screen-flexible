(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('xp-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'xp-dom'], factory) :
	(factory((global.screenFlexibleAuto = {}),global.xpDom));
}(this, (function (exports,xpDom) { 'use strict';

/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-06-01 04:33:34
 * @modify date 2017-07-24 11:17:12
 * @desc [scale methods]
*/

function bodyResize() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'padding';

  var docEl = document.documentElement;
  var bodyEl = document.body;
  // 设置docEl初始样式
  docEl.style.width = '100%';
  docEl.style.height = '100%';
  var offsetWidth = docEl.offsetWidth;
  var offsetHeight = docEl.offsetHeight;
  var scaleX = offsetWidth / width;
  var scaleY = offsetHeight / height;
  var top = 0;
  var left = 0;
  var scale = 1; // 初始化为1
  if (type === 'padding') {
    if (scaleX < scaleY) {
      scale = scaleX;
      top = (offsetHeight - height * scale) / 2;
    } else if (scaleX > scaleY) {
      scale = scaleY;
      left = (offsetWidth - width * scale) / 2;
    } else {
      // 同步放大/缩小
      scale = scaleX;
    }
  } else if (type === 'width') {
    scale = scaleX;
  } else if (type === 'height') {
    scale = scaleY;
  } else if (type === 'full') {
    // do nothing
  }

  scale = scale.toFixed(6);
  top = top.toFixed(4);
  left = left.toFixed(4);
  bodyEl.style.width = width + 'px';
  bodyEl.style.height = height + 'px';
  bodyEl.style.transformOrigin = 'left top 0px';
  bodyEl.style.webkitTransformOrigin = 'left top 0px';
  bodyEl.style.MozTransformOrigin = 'left top 0px';
  // 全部铺满
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

/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-06-01 04:33:34
 * @modify date 2017-06-01 04:33:34
 * @desc [auto scale]
*/

var timer = void 0;

xpDom.on(window, 'resize', function () {
  clearTimeout(timer);
  timer = setTimeout(bodyResize, 150); // throttle
});

xpDom.on(window, 'pageshow', function (e) {
  if (e.persisted) {
    clearTimeout(timer);
    timer = setTimeout(bodyResize, 150); // throttle
  }
});

bodyResize();

Object.defineProperty(exports, '__esModule', { value: true });

})));
