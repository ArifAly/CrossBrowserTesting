/// <reference types="cypress" /> 
Cypress.on('uncaught:exception', (err, runnable)=> {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
    
describe('Test suite For Cross Browser Testing', function(){
    before(() => {
        // root-level hook
        // runs once before all tests
        //cy.fixture('example').as('exampleJson') // load data from example.json
        cy.fixture('example').then(function(data) 
        {
           this.data =data
       // load data globally 
        })
    })
    it('First test case', function(){
    cy.visit('http://demo.automationtesting.in/')
    cy.get('#enterimg').click()
    cy.get('h2').contains(this.data.heading)
     cy.get('.col-md-3.col-xs-3.col-sm-3.control-label').contains('Full Name')
     cy.get(':nth-child(1) > :nth-child(2) > .form-control').type(this.data.FirstName)
     cy.get(':nth-child(1) > :nth-child(2) > .form-control').should('have.value', this.data.FirstName)
     cy.get(':nth-child(1) > :nth-child(3) > .form-control').type(this.data.LastName)
     cy.get(':nth-child(1) > :nth-child(3) > .form-control').should('have.value', this.data.LastName)
     cy.get('.col-md-8 > .form-control').type(this.data.Address)
     cy.get('.col-md-8 > .form-control').should('have.value',this.data.Address)
     cy.get('#eid > .form-control').type(this.data.Email)
     cy.get('#eid > .form-control').should('have.value', this.data.Email)
     cy.get(':nth-child(4) > .col-md-4 > .form-control').type(this.data.PhoneNumber)
     cy.get(':nth-child(4) > .col-md-4 > .form-control').should('have.value',this.data.PhoneNumber)
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

     cy.get('.select2-search__field').type(this.data.Country)
     //cy.wait(2000)
     cy.get('.select2-results__option').each(($el, index , $list) => {
    
        if($el.text()==="india") // if the text is indonesia, then click on that text
        {
            //$el.click() // not working that's why i am using the following method
        }
        cy.get('.select2-results__option').click() // $el.click is working then no need of this link
        cy.get('#yearbox').select(this.data.year).should('have.value', this.data.year)
        cy.get(':nth-child(11) > :nth-child(3) > .form-control').select(this.data.Month).should('have.value', this.data.Month)
        cy.get('#daybox').select(this.data.day).should('have.value', this.data.day)
        cy.get('#firstpassword').type(this.data.password)
        cy.get('#firstpassword').should('have.value', this.data.password)
        cy.get('#secondpassword').type(this.data.confirmPassword)
        cy.get('#secondpassword').should('have.value', this.data.confirmPassword)
        cy.get('#submitbtn').click()
     })
     
    })
})
 