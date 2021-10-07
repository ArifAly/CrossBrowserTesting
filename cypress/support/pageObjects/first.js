class first {
getenter()
{
  return   cy.get('#enterimg')
}
 getheading()
 {
   return cy.get('h2')
 }
  getfullname()
  {
   return cy.get('.col-md-3.col-xs-3.col-sm-3.control-label')
  }
  getfirstName()
  {
      return cy.get(':nth-child(1) > :nth-child(2) > .form-control')
  }
  getlastName()
  {
       return  cy.get(':nth-child(1) > :nth-child(3) > .form-control')
  }
  getAddress()
  {
    return cy.get('.col-md-8 > .form-control')
  }
  getEmail()
  {
    return  cy.get('#eid > .form-control')
  }
  getPhoneNumber()
  {
   return cy.get(':nth-child(4) > .col-md-4 > .form-control')
  }
  getRadio()
  {
   return cy.get('input[type="radio"]')
  }
  getCheckBox()
  {
  return cy.get('#checkbox1')
  }
  getForClick1()
  {
   return cy.get('#msdd')
  }
   getForClick2()
   {
   return cy.get(':nth-child(3) > .ui-corner-all')
   }
   getForClick3()
   {
   return  cy.get(':nth-child(4) > .ui-corner-all')
   }
   getForClick4()
   {
   return cy.get(':nth-child(7) > .ui-corner-all') 
   }
  getForClick5()
  {
  return cy.get('#section > .container > .row')
  }
  getSkills()
  {
   return cy.get('#Skills')
  }
  getSelection()
  {
   return cy.get('.select2-selection')
  }
  getCountry()
  {
   return cy.get('.select2-search__field')
  }
  getloop()
  {
   return cy.get('.select2-results__option')
  }
  getResultOption()
  {
  return  cy.get('.select2-results__option')
  }
  getyearBox()
  {
    return cy.get('#yearbox')
  }
  getMonth()
  {
   return  cy.get(':nth-child(11) > :nth-child(3) > .form-control')
  }
  getDay()
  {
    return cy.get('#daybox')
  }
  getPassword()
  {
   return  cy.get('#firstpassword')
  }
  getconfirmPassword()
  {
   return  cy.get('#secondpassword')
  }
  getSubmit()
  {
   return cy.get('#submitbtn')
  }
}
export default first 