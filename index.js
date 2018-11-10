
function Px(style) {
  return function(name) {
    return Number(style.getPropertyValue(name).replace('px',''))
  }
}

module.exports = function(el) {
  const style = window.getComputedStyle(el)
  const px = Px(style)

  function border(edge) {
    return px(`border-${edge}-width`)
  }

  const bb = el.getBoundingClientRect()
  const left = bb.left + border('left')
  const right = bb.right - border('right')
  const top = bb.top + border('top')
  const bottom = bb.bottom - border('bottom')
  
  return {
    left, right, top, bottom,
    x: left, y: top,
    width: right - left,
    height: bottom - top
  }
}
