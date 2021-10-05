/// <reference types="cypress" /> 
Cypress.on('uncaught:exception', (err, runnable)=> {
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
     cy.get(':nth-child(1) > :nth-child(2) > .form-control').should('have.value', 'Arif')
     cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('Ali')
     cy.get(':nth-child(1) > :nth-child(3) > .form-control').should('have.value', 'Ali')
     cy.get('.col-md-8 > .form-control').type('Street No# 04, Rawalpindi punjab Pakistan')
     cy.get('.col-md-8 > .form-control').should('have.value', 'Street No# 04, Rawalpindi punjab Pakistan')
     cy.get('#eid > .form-control').type('arifalidanish15@gmail.com')
     cy.get('#eid > .form-control').should('have.value', 'arifalidanish15@gmail.com')
     cy.get(':nth-child(4) > .col-md-4 > .form-control').type('3369167046')
     cy.get(':nth-child(4) > .col-md-4 > .form-control').should('have.value', '3369167046')
     cy.get('input[type="radio"]').first().check()
     
     cy.get('#checkbox1').check()
     //cy.get('.ui-autocomplete > :nth-child(3)').select('English')
     cy.get('#msdd').click()
     cy.get(':nth-child(3) > .ui-corner-all').click()
     cy.get(':nth-child(4) > .ui-corner-all').click()
     cy.get(':nth-child(7) > .ui-corner-all').click()
     cy.get('#section > .container > .row').click()
     //cy.get('#Skills').click()
     cy.get('#Skills').select('C').should('have.value', 'C')
     cy.get('.select2-selection').click()

     cy.get('.select2-search__field').type('ind')
     //cy.wait(2000)
     cy.get('.select2-results__option').each(($el, index , $list) => {
    
        if($el.text()==="india") // if the text is indonesia, then click on that text
        {
            //$el.click() // not working that's why i am using the following method
        }
        cy.get('.select2-results__option').click() // $el.click is working then no need of this link
        cy.get('#yearbox').select('1997').should('have.value', '1997')
        cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('March').should('have.value', 'March')
        cy.get('#daybox').select('2').should('have.value', '2')
        cy.get('#firstpassword').type('danishali')
        cy.get('#firstpassword').should('have.value', 'danishali')
        cy.get('#secondpassword').type('danishali')
        cy.get('#secondpassword').should('have.value', 'danishali')
        cy.get('#submitbtn').click()
     })
     
    })
})
 