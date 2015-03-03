var autocurry = require('./autocurry.js')
  , addQuad = require('./addquad.js')
  , removeQuad = require('./removequad.js')

function opGSPO(op,g,s,p,o){
  if(op=='add'){
    return addQuad(g,s,p,o)
  }
  if(op=='remove'){
    return removeQuad(g,s,p,o)
  }
  throw new Error("unrecognised value for `op`")
}



module.exports = autocurry(opGSPO,5)
