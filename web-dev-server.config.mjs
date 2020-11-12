import { esbuildPlugin } from '@web/dev-server-esbuild'
import resolve           from '@rollup/plugin-node-resolve'
import commonjs       from '@rollup/plugin-commonjs'
import { fromRollup } from '@web/dev-server-rollup'

const commonJsPlugin = fromRollup(commonjs)

export default {
  preserveSymlinks: true,
  plugins: [
    esbuildPlugin({ ts: true }),
    resolve(),
    commonJsPlugin({})
  ]
}
