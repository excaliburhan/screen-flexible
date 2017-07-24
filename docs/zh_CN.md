# screen-flexible
大屏自适应方案.

## 安装

> npm install screen-flexible

## 使用

### 当屏幕分辨率是1920*1080

```js
import 'screen-flexible/lib/auto'
```

### 当屏幕分辨率不一定，比如: 1600*1000

```js
import { bodyResize } from 'screen-flexible'

// auto resize
let timer
window.addEventListener('resize', () => {
  clearTimeout(timer)
  timer = setTimeout(() => { bodyResize(1600, 1000) }, 300)
})

bodyResize(1600, 1000)
```

### 类型选择

```js
import { bodyResize } from 'screen-flexible'

/**
 * 缩放方式
 * 'padding': 默认，使用较小的边作为缩放比例，较大的边会自动空出间距并居中
 * 'width': 等比例缩放，宽度铺满
 * 'height': 等比例缩放，高度铺满
 * 'full': 全屏铺满
*/

let timer
window.addEventListener('resize', () => {
  clearTimeout(timer)
  timer = setTimeout(() => { bodyResize(1920, 1080, 'full') }, 300)
})

bodyResize(1920, 1080, 'full')
```
