import { removeClass, addClass, hasClass } from 'dom-helpers/class'
import curry from 'lodash/function/curry'
import rearg from 'lodash/function/rearg'

const curryAndFlip = (func, length = func.length) => {
  const arr = []
  for (let i = 1; i < length; i++) arr.push(i)
  arr.push(0)
  return curry(rearg(func, arr), length)
}
const toggleClass = (elem, className) => {
  if (hasClass(elem, className)) removeClass(elem, className)
  else addClass(elem, className)
}

export const curriedAddClass = curryAndFlip(addClass)
export const curriedRemoveClass = curryAndFlip(removeClass)
export const curriedToggleClass = curryAndFlip(toggleClass)

export function isDomNode (maybe) {
  return typeof maybe === 'object' &&
    typeof maybe.nodeName === 'string' &&
    typeof maybe.nodeType === 'number'
}

export function preloadBkgImage (src, cb) {
  let image = document.createElement('img')
  image.setAttribute('src', src)
  image.onload = _ => {
    cb.call()
    image = null
  }
}

export function fromArray (likeArr) {
  if (typeof likeArr === 'string' ||
    typeof likeArr === 'object' &&
    typeof likeArr.length === 'number') {
    return [].slice.call(likeArr)
  }
  else return []
}

export function getElementHeight (elem) {
  const rect = elem.getBoundingClientRect()
  if (typeof rect.height === 'number') return rect.height
  else return rect.bottom - rect.top
}
