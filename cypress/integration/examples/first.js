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
     cy.get('.col-md-3.col-xs-3.col-sm-3.control-label').contains('Full Name')
     cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Arif')
     cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('Ali')
     cy.get('.col-md-8 > .form-control').type('Street No# 04, Rawalpindi punjab Pakistan')
     cy.get('#eid > .form-control').type('arifalidanish15@gmail.com')
     cy.get(':nth-child(4) > .col-md-4 > .form-control').type('03405057916')
    
    })
})