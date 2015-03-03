function addQuad(g,s,p,o){
      g[s] = g[s] || {}
      var po = g[s][p]
      g[s][p] = po ||[]
      g[s][p].push(o);
      return g;
}
module.exports = addQuad
