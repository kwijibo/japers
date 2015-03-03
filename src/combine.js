module.exports = function combine(){
  var funcs = arguments
  return function(){
    var results=[]
    for (var i = 0; i < funcs.length; i++) {
      var func = funcs[i]
      results.push(func.apply(undefined,arguments))
    }
    return results
  }
}
