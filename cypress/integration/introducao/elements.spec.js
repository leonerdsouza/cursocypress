/// <reference types="cypress"/>

describe("Work with basic elements", () =>{
  before(() =>{
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
  })
  beforeEach(() =>{
    cy.reload()
  })


    it("Text", () =>{
      cy.get('span').should('contain', 'Cuidado')
      cy.get('.facilAchar').should('contain', 'Cuidado')
      cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () =>{
      cy.get('[href="#"]').click()
      cy.get('#resultado').should('have.text', 'Voltou!')
      cy.reload()
      cy.get('#resultado').should('have.not.text', 'Voltou!')
      cy.contains('Voltar').click()
      cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () =>{
      cy.get('#formNome')
          .type('Leonardo')
          .should('have.value', 'Leonardo')
      cy.get('[data-cy=dataSobrenome]')
        .type('Teste12345{backspace}{backspace}')
        .should('have.value', 'Teste123')

      cy.get('#elementosForm\\:sugestoes')//sempre que tiver problema com : usar \\ antes
        .type('Eu sou namorado de uma grande gostosa')
        .should('have.value','Eu sou namorado de uma grande gostosa')
    cy.get('#elementosForm\\:sugestoes')//sempre que tiver problema com : usar \\ antes
        .clear()
        .type('Erro{selectall}acerto',{delay:100})
        .should('have.value','acerto')
    })


    it('Radio Button',()=>{
      cy.get('#formSexoMasc')
        .click()
        .should('be.checked')
      cy.get('#formSexoFem').should('not.be.checked')
      cy.get("[name='formSexo']").should('have.length', 2)
    })

    it.only('CheckBox', ()=>{
      cy.get('#formComidaCarne')
        .click()
        .should('be.checked')
      cy.get("[name='formComidaFavorita']").click({multiple:true})
      cy.get('#formComidaCarne').should('not.be.checked')
      cy.get('#formComidaPizza').should('be.checked')
    })

    it.only('ComboBox', ()=>{
      cy.get('[data-test=dataEscolaridade]')
        .select('Superior')
        .should('have.value', 'superior')
      // TODO validar opções do combo 
    })
    it.only('Combo multiplo', ()=>{
      cy.get('[data-testid=dataEsportes]')
        .select(['natacao','Karate'])
    // TODO validar opções do combo multiplo
    })


})
