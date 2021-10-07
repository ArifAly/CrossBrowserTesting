/// <reference types="cypress" /> 
describe('Test Suites for Testing', function(){
   before(() =>{
     


   })
    it('Test case for the Selectors', function(){
        cy.visit('http://demo.automationtesting.in/')
        cy.get('#enterimg').click()
        cy.get('[href="Interactions.html"]').click()
        //cy.get(':nth-child(2) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()
        cy.get(':nth-child(2) > .analystic').click()
        cy.get('.SerializeFunc > :nth-child(1) > b').click() 
        //cy.get('//span[@id="result"]').contains('Readability')
         
       
         
    })
})




