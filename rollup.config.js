import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

let plugins = [
  resolve(),
  commonjs(),
  eslint(),
  babel({
    exclude: 'node_modules/**',
  }),
  replace({
    exclude: 'node_modules/**',
    ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
  }),
]

// 使用uglify压缩，一般不需要
if (process.env.NODE_ENV === 'production') {
  let prodPlugins = [uglify()]
  plugins.concat(prodPlugins)
}

let config

if (process.env.NODE_TYPE === 'auto') {
  config = {
    input: 'src/auto.js',
    output: [
      {
        file: 'dist/auto.js', // 输出的文件 (如果没有这个参数，则直接输出到控制台)
        format: 'umd', // 输出的文件类型 (amd, cjs, es, iife, umd)
        name: 'screenFlexibleAuto', // 生成UMD模块的名字
        exports: 'named', // 导出模式，在导出多个时候使用
        // sourcemap: true, // 生成 sourcemap (`-m inline` for inline map)
      },
      { // 兼容老的代码
        file: 'lib/auto.js', // 输出的文件 (如果没有这个参数，则直接输出到控制台)
        format: 'umd', // 输出的文件类型 (amd, cjs, es, iife, umd)
        name: 'screenFlexibleAuto', // 生成UMD模块的名字
        exports: 'named', // 导出模式，在导出多个时候使用
        // sourcemap: true, // 生成 sourcemap (`-m inline` for inline map)
      }
    ],
    plugins: plugins,
  }
} else {
  config = {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.js', // 输出的文件 (如果没有这个参数，则直接输出到控制台)
        format: 'cjs', // 输出的文件类型 (amd, cjs, es, iife, umd)
        name: 'screenFlexible', // 生成UMD模块的名字
        exports: 'named', // 导出模式，在导出多个时候使用
        // sourcemap: true, // 生成 sourcemap (`-m inline` for inline map)
      },
      { // 兼容老的代码
        file: 'lib/index.js', // 输出的文件 (如果没有这个参数，则直接输出到控制台)
        format: 'cjs', // 输出的文件类型 (amd, cjs, es, iife, umd)
        name: 'screenFlexible', // 生成UMD模块的名字
        exports: 'named', // 导出模式，在导出多个时候使用
        // sourcemap: true, // 生成 sourcemap (`-m inline` for inline map)
      }
    ],
    plugins: plugins,
  }
}

export default config
