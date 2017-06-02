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
import { getScale } from 'screen-flexible'

// auto resize
let timer
window.addEventListener('resize', () => {
  clearTimeout(timer)
  timer = setTimeout(() => { getScale(1600, 1000) }, 300)
})

getScale(1600, 1000)
```
