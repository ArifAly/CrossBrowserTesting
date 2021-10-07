/// <reference types="cypress" /> 
import first from "../../support/pageObjects/first"
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
        const First = new first()
    cy.visit('http://demo.automationtesting.in/')
     First.getenter().click()
     First.getheading().contains(this.data.heading)
     First.getfullname().contains('Full Name')
     First.getfirstName().type(this.data.FirstName)
     First.getfirstName().should('have.value', this.data.FirstName)
     First.getlastName().type(this.data.LastName)
     First.getlastName().should('have.value', this.data.LastName)
     First.getAddress().type(this.data.Address)
     First.getAddress().should('have.value',this.data.Address)
     First.getEmail().type(this.data.Email)
     First.getEmail().should('have.value', this.data.Email)
     First.getPhoneNumber().type(this.data.PhoneNumber)
     First.getPhoneNumber().should('have.value',this.data.PhoneNumber)
     First.getRadio().first().check()
     First.getCheckBox().check()
     //cy.get('.ui-autocomplete > :nth-child(3)').select('English')
     First.getForClick1().click()
     First.getForClick2().click()
     First.getForClick3().click()
     First.getForClick4().click()
     First.getForClick5().click()
     //cy.get('#Skills').click()
     First.getSkills().select('C').should('have.value', 'C')
     First.getSelection().click()

     First.getCountry().type(this.data.Country)
     //cy.wait(2000)
     First.getloop().each(($el, index , $list) => {
    
        if($el.text()==="india") // if the text is indonesia, then click on that text
        {
            //$el.click() // not working that's why i am using the following method
        }
        First.getResultOption().click() // $el.click is working then no need of this link
        First.getyearBox().select(this.data.year).should('have.value', this.data.year)
        First.getMonth().select(this.data.Month).should('have.value', this.data.Month)
        First.getDay().select(this.data.day).should('have.value', this.data.day)
        First.getPassword().type(this.data.password)
        First.getPassword().should('have.value', this.data.password)
        First.getconfirmPassword().type(this.data.confirmPassword)
        First.getconfirmPassword().should('have.value', this.data.confirmPassword)
        First.getSubmit().click()
     })
    })
})
 