describe('Demonstrating Select Dropdown', () => {
    it('select dropdown by value', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        cy.get('shadow-signup-form').shadow().find('[classname="signup-form"]').within(()=>{
            const details = ['sanguine', 'sanguine@yopmail.com', 'Test@1234', 'Test@1234']
            cy.get('input').each(($input, ind)=>{
                cy.wrap($input).fill(details[ind])
            })
        })
     })
})