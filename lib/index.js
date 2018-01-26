(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.screenFlexible = {})));
}(this, (function (exports) { 'use strict';

/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-03-21 04:18:46
 * @modify date 2017-03-21 04:18:46
 * @desc [element methods]
*/

var elementProto = window.Element.prototype;

var selector2dom = function selector2dom(elem) {
  if (typeof elem === 'string') {
    // polyfill selector
    elem = document.querySelector(elem);
  }
  return elem;
};

var on = function () {
  if (document.addEventListener) {
    return function (elem, type, handler) {
      elem = selector2dom(elem);
      if (elem && type && handler) {
        elem.addEventListener(type, handler, false);
      }
    };
  } else {
    return function (elem, type, handler) {
      elem = selector2dom(elem);
      if (elem && type && handler) {
        elem.attachEvent('on' + type, handler);
      }
    };
  }
}();

var off = function () {
  if (document.removeEventListener) {
    return function (elem, type, handler) {
      elem = selector2dom(elem);
      if (elem && type) {
        elem.removeEventListener(type, handler, false);
      }
    };
  } else {
    return function (elem, type, handler) {
      elem = selector2dom(elem);
      if (elem && type) {
        elem.detachEvent('on' + type, handler);
      }
    };
  }
}();

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
  var scale = 1;
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
  dom.style.width = width + 'px';
  dom.style.height = height + 'px';
  dom.style.transformOrigin = 'left top 0px';
  dom.style.webkitTransformOrigin = 'left top 0px';
  dom.style.MozTransformOrigin = 'left top 0px';
  // 全部铺满
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

function bindResize() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { width: 1920, height: 1080 };
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;

  var timer = void 0;
  if (!options.type) options.type = 'padding';

  on(window, 'resize', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      bodyResize(options.width, options.height, options.type);
    }, delay);
  });
  on(window, 'pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        bodyResize(options.width, options.height, options.type);
      }, delay);
    }
  });

  bodyResize(options.width, options.height, options.type);
}

exports.bodyResize = bodyResize;
exports.domResize = domResize;
exports.bindResize = bindResize;
exports['default'] = bodyResize;

Object.defineProperty(exports, '__esModule', { value: true });

})));
