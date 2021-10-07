/// <reference types="cypress" /> 
import second from "../../support/pageObjects/second"
Cypress.on('uncaught:exception', (err, runnable)=> {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
describe('Test Suites for Testing', function(){
    it('Test case for the Selectors', function(){
      const Second = new second()
        cy.visit('http://demo.automationtesting.in/')
         Second.getentering().click()
         Second.getInteraction().click()
        //cy.get(':nth-child(2) > .dropdown-toggle').click()
         Second.getdropdown().click()
        Second.getanalystic().click()
        Second.getSerial().click() 
    })
})




