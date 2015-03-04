var autocurry = require('./src/autocurry.js')
var opGSPO = require('./src/opgspo.js')
var transpose = require('./src/transpose.js')
var GopSPO = transpose([1,0,2,3,4], opGSPO)
module.exports = {
  opGSPO: autocurry(opGSPO,5),
  GopSPO: autocurry(GopSPO,5),
  autocurry: autocurry,
  combine: require('./src/combine.js'),
  transpose: transpose 
}
