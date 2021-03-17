/// <reference types="cypress"/>

describe("Cypress Basic", () => {
  it("should visit page and assert title", () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    
    //cy.pause()
    
    cy.title().should('be.equal','Campo de Treinamento')
    cy.title().should('contain','Treinamento')//.debug()
    cy.title()
      .should('be.equal','Campo de Treinamento')
      .and('contain','Treinamento')
  })

  it("should find and interact with object", () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    cy.get('#buttonSimple')
        .click()
        .should('have.value','Obrigado!')
  })
})