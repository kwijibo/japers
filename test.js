var EventEmitter = require('events').EventEmitter
var japers = require('./index.js')

function _emitEvent(emitter,event){
  var a = arguments
  emitter.emit(event, a[2],a[3],a[4],a[5])
}

var ee = new EventEmitter()
  , emitEvent = japers.autocurry(_emitEvent,6)
  , emitter = emitEvent(ee)
  , emitOp = japers.autocurry(japers.combine(emitter, japers.opGSPO),5)

ee.on('add', function(g,s,p,o){
  console.log("adding quad", g,s,p,o)
})

var g = {}
, addToG = emitOp('add',g)
var writeSally = addToG('sally')
writeSally('name', {value:'Sally'})
writeSally('age', {value:'30'})
sallyKnows = writeSally('knows')
sallyKnows({value: 'Dick'})
sallyKnows({value: 'Mary'})
sallyKnows({value: 'Don'})


var graphAdder = japers.GopSPO(g,'add')
graphAdder('mary', 'know', {value: 'Dick'})
console.log(g);
