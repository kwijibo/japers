module.exports = function transpose(argsOrder, func){ 
  return function(){ 
    var inArgs = arguments
      , outArgs = argsOrder.map(function(i){ return inArgs[i]})
     func.apply(undefined,outArgs)
  }   
}
