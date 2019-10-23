(function (doc, win) {
  var docEl = doc.documentElement
  var isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  var dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1
  var scale = 1 / dpr
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  docEl.dataset.dpr = dpr
  var metaEl = doc.createElement('meta')
  metaEl.name = 'viewport'
  metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale
  docEl.firstElementChild.appendChild(metaEl)
  var recalc = function () {
    var width = docEl.clientWidth
    if (width / dpr > 750) {
      width = 750 * dpr
    }
    docEl.style.fontSize = 100 * (width / 750) + 'px'
  }
  recalc()
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
})(document, window)
