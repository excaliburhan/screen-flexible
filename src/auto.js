/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-06-01 04:33:34
 * @modify date 2017-06-01 04:33:34
 * @desc [auto scale]
*/

import { on } from 'xp-dom'
import { bodyScale } from './index.js'

let timer

on(window, 'resize', () => {
  clearTimeout(timer)
  timer = setTimeout(bodyScale, 300) // throttle
})

on(window, 'pageshow', (e) => {
  if (e.persisted) {
    clearTimeout(timer)
    timer = setTimeout(bodyScale, 300) // throttle
  }
})

bodyScale()
