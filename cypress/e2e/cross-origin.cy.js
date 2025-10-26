describe('Demonstrating cross-origin', () => {
    it('cross origin demo', () => {
        cy.visit('https://www.lambdatest.com/')
        cy.get('a[href="https://accounts.lambdatest.com/login"]').should('exist').click({ force: true })
        cy.origin('https://accounts.lambdatest.com', () => {
            cy.get('a[href="/login/github/v1?disableSignup=1"]').click()
        })
        cy.origin('https://github.com/login', () => {
            cy.get('input#login_field').type('sanguine')
        })
    })
})