// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// This is NOT an efficient implementation
Cypress.Commands.add('checkIframe', { prevSubject: 'element' }, (iframe) => {
    const win = iframe.prop('contentWindow')

    return new Promise(resolve => {
        resolve(win.document.body)
    })
})

// This is an efficient implementation
Cypress.Commands.add('checkIframeStatus', { prevSubject: 'element' }, (iframe) => {
    const win = iframe.prop('contentWindow')

    return new Promise(resolve => {
        if (win && win.document.readyState === 'complete') {
            resolve(win.document.body)
        } else {
            iframe.on('load', () => {
                resolve(win.document.body)

            })
        }
    })
})