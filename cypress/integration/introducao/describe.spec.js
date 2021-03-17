/// <reference types="cypress"/>

it('A external test', () =>{

})

describe('Should group test', () =>{
  describe('Should group a more specific test', () =>{
    it('Should be more internal test', () =>{

    })
  })
  describe('Should group 2  a more specific test', () =>{
    it('Should be more internal test 2', () =>{
      
    })
  })
  it('An internal test', () =>{

  })
})