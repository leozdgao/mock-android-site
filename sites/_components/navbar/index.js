import contains from 'dom-helpers/query/contains'
import style from 'dom-helpers/style'
import { isDomNode, curriedAddClass,
  curriedRemoveClass, curriedToggleClass } from '../../_utils/utils'

const navbarItemActiveClass = 'active'

const addActiveClass = curriedAddClass('active')
const removeActiveClass = curriedRemoveClass('active')
const toggleActiveClass = curriedToggleClass('active')

const addClosingClass = curriedAddClass('closing')
const removeClosingClass = curriedRemoveClass('closing')

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

function initNavbar () {
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

function initAside () {
  const asideMenu = document.getElementById('aside-container')
  const menu = asideMenu.children[0]
  const buttonToggle = document.querySelector('.navbar-toggle')
  if (asideMenu && buttonToggle) {
    // aside打开
    buttonToggle.addEventListener('click', openAside)
    asideMenu.addEventListener('click', e => {
      if (e.target === asideMenu) {
        closeAside()
      }
    })
  }

  function openAside () {
    addActiveClass(asideMenu)
    style(document.body, { // ban the scroll
      overflow: 'hidden'
    })

    if (menu) menu.scrollTop = 0
  }

  function closeAside () {
    removeActiveClass(asideMenu)
    addClosingClass(asideMenu)

    setTimeout(_ => {
      removeClosingClass(asideMenu)
      style(document.body, {
        overflow: void 0
      })
    }, 150)
  }
}

function init () {
  // 大屏幕下navbar的交互
  initNavbar()
  // 小屏幕下的汉堡菜单交互
  initAside()
}

init()
