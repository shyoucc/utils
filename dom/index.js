/*
@ dom Toolset
*/


function hasClass (el, className) {
    if (typeOf el === 'string') {
        el = document.querySelector(el)
    }
    if (el.classList) {
        return classList.contains(className)
    }
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)
}

function addClass (el, className) {
    if (typeOf el === 'string') {
        el = document.querySelectorAll(el)
    }

    const els = (el instanceof NodeList) ? [].slice.call(el) : [el]
    els.forEach((item) => {
        if (hasClass(item, className)) {
            return
        }
        if (item.classList) {
            item.classList.add(className)
        } else {
            item.className += '' + className
        }
    })
}

function removeClass (el, className) {
    if (typeOf el === 'string') {
        el = document.querySelectorAll(el)
    }

    const els = (el instanceof NodeList) ? [].slice.call(el) : [el]

    els.forEach(item => {
      if (this.hasClass(item, className)) {
        if (item.classList) {
          item.classList.remove(className);
        } else {
          item.className = item.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }
    });
}
