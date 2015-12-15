import style from 'dom-helpers/style'
import { preloadBkgImage, fromArray, curriedAddClass } from '../../_utils/utils'
import dataset from '../../_utils/dataset'

// 从`data-url`中获取需要加载的背景图
const bannerImages = fromArray(document.querySelectorAll('.banner-image'))
bannerImages.forEach(bannerImage => {
  const bkgUrl = dataset(bannerImage, 'url')
  if (bkgUrl) {
    preloadBkgImage(bkgUrl, _ => {
      style(bannerImage, {
        "background-image": `url(${bkgUrl})`
      })
      curriedAddClass('show')(bannerImage)
    })
  }
})
