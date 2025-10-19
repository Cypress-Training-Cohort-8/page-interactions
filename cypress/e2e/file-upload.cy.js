describe('Demonstrating Select Dropdown', () => {
    it('uploading using cypress default config', () => {
        cy.visit('/')
        cy.get('[href="/upload"]').should('be.visible').click()
        cy.get('input#file-upload').selectFile('Testing.pdf')
        cy.get('.button').click()
        cy.get('h3').should('be.visible').and('have.text', 'File Uploaded!')
    })

    it('uploading using a plugin', () => {
        cy.visit('/')
        cy.get('[href="/upload"]').should('be.visible').click()
        cy.get('input#file-upload').attachFile('Testing.pdf')
        cy.get('.button').click()
        cy.get('h3').should('be.visible').and('have.text', 'File Uploaded!')
    })
})