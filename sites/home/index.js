require('../_styles/main.less')

import { curriedAddClass } from '../_utils/utils'

document.addEventListener('DOMContentLoaded', _ => {
  require('../_components/navbar') // init navbar here
  require('../_components/banner') // init banner here

  // setTimeout(_ => {
  //   const bannerImage = document.querySelector('.banner-image')
  //   if (bannerImage) {
  //     curriedAddClass('show')(bannerImage)
  //   }
  // }, 300)
})
