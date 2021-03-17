/// <reference types="cypress"/>

describe("Espera", () =>{
  before(() =>{
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
  })
  beforeEach(() =>{
    cy.reload()
  })

  it('Deve esperar o elemento ficar visível', () =>{
    cy.get('#novoCampo').should('not.exist')
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo').type('funciona')
  })

  it.only('Deve fazer retry', () =>{
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo')
      //.should('not.exist') n pode deixar com uma que é o oposto dela
      .should('exist')
      .type('funciona')
  })
  it.only('uso do find', () =>{
    cy.get('#buttonListDOM').click()
    cy.get('#lista li')
      .find('span')
      .should('contain', 'Item 1')
    cy.get('#lista li')
      .should('contain', 'Item 2')
      //.find('span')
      //.should('contain', 'Item 2')
  })
})
