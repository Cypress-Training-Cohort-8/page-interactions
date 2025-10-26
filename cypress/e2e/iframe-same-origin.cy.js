describe('Demonstrating Select Dropdown', () => {
    it('select dropdown by value', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/iframe-demo/')
        cy.get('iframe#iFrame1').should('be.visible')
        .its('0.contentDocument.body')
        .then(($element)=>{
            cy.wrap($element).within(()=>{
                cy.get('.rsw-ce').clear().type('This is an iFrame')
            })
        })
        
    })
})