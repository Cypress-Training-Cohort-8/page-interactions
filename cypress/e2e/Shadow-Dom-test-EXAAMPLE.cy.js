describe('Second Shadow Dom Test', () => {


    it('interacts with Shadow DOM inputs', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        cy.get('#shadow_content').should('contain.text', 'Shadow DOM example')
        cy.get('#shadow_host').shadow().find("input[placeholder='Name']").type('Shadow Dom')
        cy.get('#shadow_host').shadow().find("input[placeholder='Email']").type('ShadowStryker@gmail.com')
        cy.get('input[type="range"]').should('be.visible')

    
    })



    
})