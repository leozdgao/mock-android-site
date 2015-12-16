import style from 'dom-helpers/style'
import parallax from 'lgutil/lib/dom/parallax'
import { preloadBkgImage, fromArray, curriedAddClass } from '../../_utils/utils'
import dataset from '../../_utils/dataset'

// 从`data-url`中获取需要加载的背景图
const bannerImages = fromArray(document.querySelectorAll('.banner-image'))
bannerImages.forEach(bannerImage => {
  const bkgUrl = dataset(bannerImage, 'url')
  const needParallax = dataset(bannerImage, 'parallax')
  
  if (bkgUrl) {
    preloadBkgImage(bkgUrl, _ => {
      style(bannerImage, {
        "background-image": `url(${bkgUrl})`
      })
      curriedAddClass('show')(bannerImage)

      // 仅在大屏幕下使用视差滚动
      if (needParallax) {
        if (document.documentElement.clientWidth > 1050) {
          parallax(0.4)(bannerImage)
          style(bannerImage, {
            "background-attachment": "fixed"
          })
        }
      }
    })
  }
})
