import contains from 'dom-helpers/query/contains'
import { isDomNode, curriedAddClass, curriedRemoveClass, curriedToggleClass } from '../../_utils/utils'

const navbarItemActiveClass = 'active'

const addActiveClass = curriedAddClass('active')
const removeActiveClass = curriedRemoveClass('active')
const toggleActiveClass = curriedToggleClass('active')

function getNavbarItem (elem) {
  const result = []

  if (isDomNode(elem)) {
    const innerLi = elem.getElementsByTagName('li')
    for (let i = 0, l = innerLi.length; i < l; i++) {
      const node = innerLi[i]
      if (node.parentNode === elem) result.push(node)
    }
  }

  return result
}

function init () {
  const navbar = document.getElementById('navbar-nav')
  const items = getNavbarItem(navbar)
  document.addEventListener('click', e => {
    const target = e.target
    if (contains(navbar, target)) {
      items.forEach(item => {
        if (contains(item, target)) toggleActiveClass(item)
        else removeActiveClass(item)
      })
    }
    else {
      items.forEach(removeActiveClass)
    }
  })
}

init()
