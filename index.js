var opGSPO = require('./src/opgspo.js')
var transpose = require('./src/transpose.js')
var GopSPO = transpose([1,0,2,3,4], opGSPO)
module.exports = {
  opGSPO: opGSPO,
  GopSPO: GopSPO,
  autocurry: require('./src/autocurry.js'),
  combine: require('./src/combine.js'),
  transpose: transpose 
}
