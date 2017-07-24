# screen-flexible
Adaptive solution for screen page.

## Language

- [中文](https://github.com/excaliburhan/screen-flexible/blob/master/docs/zh_CN.md)

## Installation

> npm install screen-flexible

## Usage

### The screen resolution is: 1920*1080

```js
import 'screen-flexible/lib/auto'
```

### The screen resolution is custom, eg: 1600*1000

```js
import { bodyResize } from 'screen-flexible'

let timer
window.addEventListener('resize', () => {
  clearTimeout(timer)
  timer = setTimeout(() => { bodyResize(1600, 1000) }, 300)
})

bodyResize(1600, 1000)
```

### Type option

```js
import { bodyResize } from 'screen-flexible'

/**
 * Types of resize method
 * 'padding': default, use the minimum axis scale and maximum axis will be padding with blank
 * 'width': use the x-axis scale
 * 'height': use the y-axis scale
 * 'full': use both x-axis and y-axios scale to fullfill the screen
*/

let timer
window.addEventListener('resize', () => {
  clearTimeout(timer)
  timer = setTimeout(() => { bodyResize(1920, 1080, 'full') }, 300)
})

bodyResize(1920, 1080, 'full')
```
