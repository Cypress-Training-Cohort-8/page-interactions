describe('Demonstrating Select Dropdown', () => {
    it('select dropdown by value', () => {
        cy.visit('https://kitchen.applitools.com/ingredients/iframe')
        cy.get('iframe#youtube-table-cypress').should('be.visible').wait(2000)
        cy.get('iframe#youtube-table-cypress')
        .checkIframeStatus()
        .find('button[title="Play"]').click()
        
    })
})