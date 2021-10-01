/// <reference types="cypress" /> 
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
describe('Test suite For Cross Browser Testing', function(){
    it('First test case', function(){
    cy.visit('http://demo.automationtesting.in/')
    cy.get('#enterimg').click()
    cy.get('h2').contains('Register')

    })
})