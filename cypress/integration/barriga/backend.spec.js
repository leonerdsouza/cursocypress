/// <reference types="cypress"/>

describe("Should test at backend level", () =>{
  before(() =>{
    //cy.login('leonardosouzac12@gmail.com','lost1234')
  })
  beforeEach(() =>{
    //cy.resetApp()
  })

  it('Should create an account', () =>{
  cy.request({
     method: 'POST', 
     url: 'https://barrigarest.wcaquino.me/signin', 
     body: {
        email: "",
        redirecionar: false,
        senha: "",
      }
     }).its('body.token').should('not.be.empty')
      .then(token =>{
        cy.request({
          url: 'https://barrigarest.wcaquino.me/contas',
          method: 'POST',
          headers:{Authorization:`JWT ${token}`},
          body:{
            nome: 'Conta via rest'
          }
        }).then(res => console.log(res))
      })
  })

  // it('Should update existing account', ()=>{
    
  // })

  // it('Should not creat an account that already exists', ()=>{
    
  // })


  // it('Should create a transaction', ()=>{
    
  // })

  // it('Should get balance', ()=>{
    
  // })

  // it('Should remove a transaction', ()=>{
   
  // })
})
