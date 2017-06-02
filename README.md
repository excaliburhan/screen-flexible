# screen-flexible
Adaptive solution for screen page.

## Language

- [中文](https://github.com/excaliburhan/screen-flexible/blob/master/doc/zh_CN.md)

## Installation

> npm install screen-flexible

## Usage

### The screen resolution is: 1920*1080

```js
import 'screen-flexible/lib/auto'
```

### The screen resolution is custom, eg: 1600*1000

```js
import { getScale } from 'screen-flexible'

// auto resize
let timer
window.addEventListener('resize', () => {
  clearTimeout(timer)
  timer = setTimeout(() => { getScale(1600, 1000) }, 300)
})

getScale(1600, 1000)
```
