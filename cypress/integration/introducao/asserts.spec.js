/// <reference types="cypress"/>

it('Equality',()=>{
  const a = 1;
  expect(a).equal(1)
  expect(a, 'Deveria ser 1').equal(1)
  expect(a).not.to.be.equal('b')
})

it('Truthy',()=>{
  const a = true;
  const b = null;
  let c;
  expect(a).to.be.true;
  expect(b).to.be.null;
  expect(a).to.be.not.null;
  expect(c).to.be.undefined;
})

it('Object Equality',()=>{
  const obj = {
    a:1,
    b:2
  }
  expect(obj).to.be.equal(obj)
  expect(obj).to.be.deep.equal({a:1, b:2})
  expect(obj).include(({a:1}))
  expect(obj).to.have.property('b',2)
  expect(obj).to.not.be.empty
})

it('Array', () => {
  const arr=[1,2,3]
  expect(arr).to.have.members([1,2,3])
  expect(arr).to.include.members([1,2])
  expect(arr).to.not.be.empty
})

it('Types', ()=> {

  const num =1
  const string = 'String'


  expect(num).to.be.a('number')
  expect(string).to.be.a('string')
  expect({}).to.be.an('object')
  expect([]).to.be.an('array')

})

it('String', () => {
  const str = 'String de teste'

  expect(str).to.be.equal('String de teste')
  expect(str).to.be.length('15')
  expect(str).to.be.contains('teste')
  expect(str).to.be.match(/String/)
  expect(str).to.be.match(/^String/)
  expect(str).to.be.match(/teste$/)
  expect(str).to.be.match(/.{15}/)
  expect(str).to.be.match(/\w+/)
  expect(str).to.be.match(/\D+/)
})

it('Numbers', () =>{
  const number = 4
  const floatNumber = 3.14159

  expect(number).to.be.equal(4)
  expect(number).to.be.above(2)
  expect(number).to.be.below(7)
  expect(floatNumber).to.be.equal(3.14159)
  expect(floatNumber).to.be.closeTo(3.1,0.2)
  expect(floatNumber).to.be.above(3)
  expect(floatNumber).to.be.below(4)
})