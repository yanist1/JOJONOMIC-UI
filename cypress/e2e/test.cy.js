describe('Test', () => {
  //Scenario: user view web page and searching data
  it('User can search on web', () => {
    cy.viewport(1280,720)
    cy.visit('https://www.service.nsw.gov.au/')
  })

  it('User can find something and will be able to view search result', () => {
    cy.viewport(1280,720)
    cy.get("div[data-personalisation-type='default'] header div div input[placeholder='Search']").type("Apply for a number plate")
    cy.wait(3000)
    cy.get('[data-personalisation-type="default"] > .page-hero > .container > .page-hero__title > .form--hero-search-group > .form__actions > .button').click()
    cy.expect('.search__results').to.exist
  })

  // Scenario: find location page
  it('User on Find Location Page', () => {
    cy.viewport(1280,720)
    cy.get("header li:nth-child(4) a:nth-child(1)")
    cy.get("header li:nth-child(4) a:nth-child(1)").click()
    cy.get('#page-title')
  })

  it('User can Find Location and will be able to view search result', () => {
    cy.viewport(1280,720)
    cy.get('#locatorTextSearch').type('Sydney Domestic Airport 2020')
    cy.get('.form__actions > .button').click()
    cy.expect(':nth-child(5) > .location__title').to.exist
  })

})