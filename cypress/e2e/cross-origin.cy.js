describe('Demonstrating cross-origin', () => {
    it('cross origin demo', () => {
        cy.visit('https://www.netflix.com/')
        cy.get('[href="https://fast.com"]').should('exist').click()
        cy.get('#show-more-details-link').click()
    })
})