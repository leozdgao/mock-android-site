require('../_styles/main.less')

import style from 'dom-helpers/style'
import dataset from '../_utils/dataset'
import { fromArray, getElementHeight } from '../_utils/utils'

const bigger = (a, b) => {
  return a > b ? a: b
}

document.addEventListener('DOMContentLoaded', _ => {
  require('../_components/navbar') // init navbar here
  require('../_components/banner') // init banner here

  // 确保样式已经被应用（webpack开发模式下）
  setTimeout(_ => {
    const rows = fromArray(document.querySelectorAll('.row'))
    rows.forEach(row => {
      const matchHeight = dataset(row, 'matchHeight')
      if (matchHeight) {
        const textButton = row.querySelector('.text-button')
        const textButtonHeight = getElementHeight(textButton)
        const getReference = column => {
          return column.children[0]
        }
        matchRowHeight(row, textButtonHeight, getReference)

        window.addEventListener('resize', _ => {console.log('resize');
          matchRowHeight(row, textButtonHeight, getReference)
        })
      }
    })

    function matchRowHeight (row, external, getReference) {
      if (!getReference) getReference = i => i
      let columnMaxHeight = 0
      // 获取最长的那一个列
      for (let i = 0, l = row.children.length; i < l; i++) {
        const column = row.children[i]
        // 比较每一列第一个元素的高度
        if (column.children.length > 0) {
          const elem = getReference(column)
          columnMaxHeight = bigger(columnMaxHeight, getElementHeight(elem.children[0]))
        }
      }

      const columnHeight = columnMaxHeight + external

      for (let i = 0, l = row.children.length; i < l; i++) {
        style(getReference(row.children[i]), {
          height: columnHeight + 'px'
        })
      }
    }
  })
})
