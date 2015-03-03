var removeQuad = require('../src/removequad.js')
describe("removeQuad", function(){
  it("should remove a triple from a graph object", function(){
    var graph = {'urn:flossy': {'urn:type': [{value: 'Sheep'}] }}
    var actual = removeQuad(graph,'urn:flossy','urn:type',{value:'Sheep'})
    expect(actual).toEqual({})
  })
})
