/// <reference types="cypress" /> 
import third from "../../support/pageObjects/third"
Cypress.on('uncaught:exception', (err, runnable)=> {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
describe('Test Suite for Demo Automation Site',function(){
    it('Test case for Widgets' , function(){
        const Third = new third()
    cy.visit('http://demo.automationtesting.in/')
   Third.getentering().click()
    Third.getdropdown().click()
     Third.getddlMenu().click()

     Third.getslider().click({ multiple: true, force: true });
      Third.gethandler().type(
       "{rightarrow}{rightarrow}"
  );
 })  
})