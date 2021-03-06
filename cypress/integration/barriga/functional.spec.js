/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'

describe("Should test at functional level", () =>{
  before(() =>{
    cy.login('leonardosouzac12@gmail.com','lost1234')
  })
  beforeEach(() =>{
    cy.get(loc.MENU.HOME)
    cy.resetApp()
  })

  it('Should create an account', () =>{
    cy.acessarMenuConta()
    cy.inserirConta('Conta de Teste')
    cy.get(loc.MESSAGE).should('contain','Conta inserida com sucesso!')
  })

  it('Should update existing account', ()=>{
    cy.acessarMenuConta()
    cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta para alterar')).click()
    cy.get(loc.CONTAS.NOME)
      .clear()
      .type('conta alterada')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain','Conta atualizada com sucesso!')
  })

  it('Should not creat an account that already exists', ()=>{
    cy.acessarMenuConta()
    cy.get(loc.CONTAS.NOME).type('Conta mesmo nome')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain','code 400')
  })


  it('Should create a transaction', ()=>{
    cy.get(loc.MENU.MOVIMENTACAO).click()
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type('TESTE')
    cy.get(loc.MOVIMENTACAO.VALOR).type('1000')
    cy.get(loc.MOVIMENTACAO.INTERESSADO).type('José')
    cy.get(loc.MOVIMENTACAO.CONTA).select('Conta para movimentacoes')
    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain','Movimentação inserida com sucesso!')
    cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
    cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('TESTE', '1.000,00')).should('exist') 
  })

  it.only('Should get balance', ()=>{
    cy.get(loc.MENU.HOME).click()
    
    cy.get(loc.MENU.EXTRATO).click()
    cy.xpath(loc.EXTRATO.FN_XP_ALTERAR_MOVIMENTACAO('Movimentacao 1, calculo saldo')).click() 
    cy.get(loc.MOVIMENTACAO.DESCRICAO).should('have.value', 'Movimentacao 1, calculo saldo')

    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain','sucesso')

    cy.get(loc.MENU.HOME).click()
    cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', 'R$')

  })

  it('Should remove a transaction', ()=>{
    cy.get(loc.MENU.EXTRATO).click()
    cy.xpath(loc.EXTRATO.FN_XP_REMOVER_MOVIMENTACAO('Movimentacao para exclusao')).click() 
    cy.get(loc.MESSAGE).should('contain','Movimentação removida com sucesso!')
 
  })
})