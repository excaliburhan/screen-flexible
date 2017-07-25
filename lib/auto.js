'use strict';

var _xpDom = require('xp-dom');

var _index = require('./index.js');

var timer = void 0;

(0, _xpDom.on)(window, 'resize', function () {
  clearTimeout(timer);
  timer = setTimeout(_index.bodyScale, 300);
});

(0, _xpDom.on)(window, 'pageshow', function (e) {
  if (e.persisted) {
    clearTimeout(timer);
    timer = setTimeout(_index.bodyScale, 300);
  }
});

(0, _index.bodyScale)();