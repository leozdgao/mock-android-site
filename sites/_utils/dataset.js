// replace namesLikeThis with names-like-this
function toDashed (name) {
  return name.replace(/([A-Z])/g, u => {
    return "-" + u.toLowerCase()
  })
}

let fn

if (typeof document !== "undefined" && document.head && document.head.dataset) {
  fn = {
    set (node, attr, value) {
      node.dataset[attr] = value
    },
    get (node, attr) {
      return node.dataset[attr]
    },
    del (node, attr) {
      delete node.dataset[attr]
    }
  }
} else {
  fn = {
    set (node, attr, value) {
      node.setAttribute('data-' + toDashed(attr), value)
    },
    get (node, attr) {
      return node.getAttribute('data-' + toDashed(attr))
    },
    del (node, attr) {
      node.removeAttribute('data-' + toDashed(attr))
    }
  }
}

function dataset (node, attr, value) {
  const self = {
    set, get, del
  }

  function set (attr, value) {
    fn.set(node, attr, value)
    return self
  }

  function del (attr) {
    fn.del(node, attr)
    return self
  }

  function get (attr) {
    return fn.get(node, attr)
  }

  if (arguments.length === 3) {
    return set(attr, value)
  }
  if (arguments.length === 2) {
    return get(attr)
  }

  return self
}

export default dataset
