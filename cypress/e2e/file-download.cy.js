describe('Demonstrating Select Dropdown', () => {
    it('select dropdown by value', () => {
        cy.visit('/')
        cy.get('[href="/download"]').should('be.visible').click()
        cy.get('[href*="API Testing.pdf"]').click()
    })
})