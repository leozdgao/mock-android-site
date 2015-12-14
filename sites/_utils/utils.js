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
