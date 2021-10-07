class second {
    getentering()
    {
     return   cy.get('#enterimg')
    }
    getInteraction()
    {
       return cy.get('[href="Interactions.html"]')
    }
    getdropdown()
    {
      return  cy.get('.open > .dropdown-menu > :nth-child(2) > a')
    }
    getanalystic()
    {
      return  cy.get(':nth-child(2) > .analystic')
    }
    getSerial()
    {
     return  cy.get('.SerializeFunc > :nth-child(1) > b')
    }
}
export default second