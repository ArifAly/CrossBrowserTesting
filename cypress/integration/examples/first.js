/// <reference types="cypress" /> 

describe('Test suite For Cross Browser Testing', function(){
    it('First test case', function(){
    cy.visit('https://www.seleniumeasy.com/test/')
    cy.get('.at-cm-no-button').click()
    cy.get('#btn_basic_example').click()
    cy.get('#basic').contains('Simple Form Demo').click()
     

    })
})