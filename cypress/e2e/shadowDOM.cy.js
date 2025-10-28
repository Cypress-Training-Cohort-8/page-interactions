describe('Shadow DOM Test', () => {
  it('goes into the Shadow DOM to fill Name and Email', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom');

 const user = {
      name: 'Buckaroo Banzai',
      email: 'Banzai@email.com'
    };

    cy.get('#shadow_host')
      .shadow()
      .find('input[placeholder="Name"]')
      .type(user.name);

    cy.log('Typing email inside Shadow DOM...');
    cy.get('#shadow_host')
      .shadow()
      .find('input[placeholder="Email"]')
      .should('be.visible')
      .and('have.attr', 'type', 'email')
      .type(user.email);

    
    cy.get('#shadow_host')
      .shadow()
      .find('input[placeholder="Name"]')
      .should('have.value',  user.name);

    cy.get('#shadow_host')
      .shadow()
      .find('input[placeholder="Email"]')
      .should('have.value', user.email);

      
  });

  
});
