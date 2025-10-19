describe('Demonstrating Select Dropdown', () => {
    it('select dropdown by value', () => {
        cy.visit('/')
        cy.get('[href="/dropdown"]').should('be.visible').click()
        cy.get('select#dropdown').select('1')
    })
    
    it('select dropdown by text', () => {
        cy.visit('/')
        cy.get('[href="/dropdown"]').should('be.visible').click()
        cy.get('select#dropdown').select('Option 2')
    })
})