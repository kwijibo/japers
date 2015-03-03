var addQuad = require('../src/addquad.js')
describe("addquad", function(){
  it("should add a triple to a graph object", function(){
    var expected = {'urn:flossy': {'urn:type': [{value: 'Sheep'}] }}
    var actual = addQuad({},'urn:flossy','urn:type',{value:'Sheep'})
    expect(actual).toEqual(expected)
  })
})
