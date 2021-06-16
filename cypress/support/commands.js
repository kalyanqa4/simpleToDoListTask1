// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addAToDo', (item) => {
	cy.intercept('POST','api/todos')
	  .as('saveData')

	cy.get('.input-lg')
	  .click()
	  .type(item)
	cy.get('.btn-lg')
	  .click()

	cy.wait('@saveData')
})

Cypress.Commands.add('deleteAToDo', (item) => {
	cy.intercept('Delete','api/todos/*')
	  .as('deleteData')

	cy.contains('.ng-binding',item)
  	  .click()

  	cy.wait('@deleteData')
})

Cypress.Commands.add('verifyHeader', (header, count) => {
	cy.get('.jumbotron')
	  .find('h1')
	  .should('contain.text', `${header}${count}`)
})