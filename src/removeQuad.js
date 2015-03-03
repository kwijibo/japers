function isDefined(i){return i}

function removeQuad(g,s,p,o){
      if(!g[s] || !Array.isArray(g[s][p])) return false
      var po = g[s][p]
      for (var i = 0; i < po.length; i++) {
        var o2 = po[i]
        if(o.value==o2.value){
          delete g[s][p][i]
        }
      }
      if(g[s][p].filter(isDefined).length===0){
        delete g[s][p]
      }
      if(Object.keys(g[s]).length===0){
        delete g[s]
      }
      return g;
}

module.exports = removeQuad
