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

