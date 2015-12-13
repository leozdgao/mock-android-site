import url from 'url'
import { __IS_PROD__ } from '../../config/environment'


// 返回一个scripts数组和一个links数组
module.exports = function resolveAssets (name) {
  if (__IS_PROD__) {
    // 应该从manifest文件中获取
  }
  else {
    // 开发模式下不需要links
    const webpackConfig = require('../../config/webpack/dev.config')
    const script = url.resolve(webpackConfig.output.publicPath, `${name}.js`)
    return {
      scripts: [ script ]
    }
  }
}
