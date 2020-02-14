const postcss = require('postcss')

/**
 * Transforms pixel value to rem value
 * according to body font size set as `defFontSize`
 *
 * E.g. let defFontSize == 16
 * then 24pxr == 1.5rem, 16pxr == 1rem
 *
 * @type {postcss.Plugin<any>}
 */
module.exports = postcss.plugin('postcss-pxrem', function(opts = {}) {
  const def = {
    defFontSize: 16
  }
  
  for (let d in def) {
    if (!opts.hasOwnProperty(d)) {
      opts[d] = def[d]
    }
  }
  
  const unitRegexp = /([\d.]+)pxr/i,
        ratio = 1 / opts.defFontSize
  
  
  return function pxrem(css) {
    
    css.walkDecls(function (decl) {
      if (decl.value.match(unitRegexp)) {
        decl.value = decl.value.replace(unitRegexp, function(m, value) {
          value = (parseFloat(value) || 0) * ratio
          return value + 'rem'
        })
      }
    })
    
  }
})