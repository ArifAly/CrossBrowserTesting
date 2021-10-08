/// <reference types="cypress" /> 
describe('Test suite for DatePicker', function(){
    it('Test case for selecting the date', function(){
        cy.visit('http://demo.automationtesting.in/')
        cy.get('#enterimg').click()
        cy.get(':nth-child(5) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(3) > a').click()
         //First it Clicks on the calendar's field.
       //cy.get('.imgdp').click();  
      //Then Clicks on current date. 
        //First it Clicks on the calendar's field.
cy.get('.imgdp').click();
//Then Clicks on current date. 
cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click();
    })
})
