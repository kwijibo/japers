# japers
Auto partially-applied functions for creating rdf graph structures in javascript


##Basic Usage
```
var japers = require('japers')

var quadOperation = japers.opGSPO

var oneTripleGraph = quadOperation('add', {}, 'sally','knows', {value:'Tommy'})
//returns {sally: {knows: [{value:'Tommy'}]}}
```

##partially-applied functions:
 
If only part of op,g,s,p,o is passed to the function, another function
 is returned with those values baked into it, and accepting only the
 remainder of the arguments. Once the full argument set has been passed,
a triple will be written to the graph object `g`

```
var g={}
, addToG = quadOperation('add',g)
, writeSally = addToG('sally')
writeSally('name', {value:'Sally'})
writeSally('age', {value:'30'})
sallyKnows = writeSally('knows')
sallyKnows({value: 'Dick'})
sallyKnows({value: 'Mary'})
sallyKnows({value: 'Don'})
```
## extending functionality

`japers.combine` can be used to create a new function that calls
multiple functions which take the same arguments.

The example below combines a function that does a graph operation, with
a function that emits that operation as an event:

```
var EventEmitter = require('events').EventEmitter

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
```

##Transposing arguments

For the purposes of creating partially applied functions, it may be
useful to have the arguments to `OpGSPO` in a different order (than
`operation, graph, s, p, o`). 

`japers.transpose` will take a function and re-order the arguments based
on the `argsOrder` parameter.

For instance:
```
var GopSPO = transpose([1,0,2,3,4], opGSPO)
GopSPO({},'add','simon','age', 56)
  

```
 
