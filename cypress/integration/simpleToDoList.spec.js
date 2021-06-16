const fixture = require('./../fixtures/testdata.json')

describe('simpleToDoList', () => {
	before('should launch', () => {
		cy.visit("/")
	})

	it('should verify header', () => {
		cy.verifyHeader(fixture.header, 0)
	})

	it('should have placeholder "Get Milk"', () => {
		cy.get('.input-lg')
		  .should('have.attr', 'placeholder', 'Get Milk')
	})

	it('should have button "Add"', () => {
		cy.get('.btn-lg')
		  .should('have.text', 'Add')
	})

	it('should add one item', () => {
		cy.addAToDo(fixture.add)
		cy.verifyHeader(fixture.header, 1)
	})

	it('should add multiple items', () => {
		fixture.items.forEach(item => {
		  cy.addAToDo(item)
		})

		cy.verifyHeader(fixture.header, fixture.items.length+1)
	})

	it('should delete one item', () => {
		cy.deleteAToDo(fixture.delete)
		cy.verifyHeader(fixture.header, fixture.items.length)
	})

	it('should delete multiple items', () => {
		fixture.items.forEach(item => {
		  cy.deleteAToDo(item)
		})

		cy.verifyHeader(fixture.header, 0)
	})
})