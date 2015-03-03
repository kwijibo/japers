var autocurry = require('./autocurry.js')
  , addQuad = require('./addquad.js')
  , removeQuad = require('./removequad.js')
  , eventemitter = require('eventemitter.js')

function opGSPO(op,g,s,p,o){
  if(op=='add'){
    return autocurry(addQuad,4)
  }
  if(op=='remove'){
    return autocurry(removeQuad,4)
  }
  throw new Error("unrecognised value for `op`")
}
module.exports = autocurry(opGSPO,5)
