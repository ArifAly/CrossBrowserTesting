class third {

getentering()
{
   return  cy.get('#enterimg')
}
getdropdown()
{
     return cy.get(':nth-child(5) > .dropdown-toggle')
}
getddlMenu()
    {
       return cy.get('.open > .dropdown-menu > :nth-child(4) > a')
    }
  getslider()
  {
  return   cy.get(".ui-slider-handle")
  }
  gethandler()
  {
   return cy.get(".ui-slider-handle")
  }
  
}
export default third