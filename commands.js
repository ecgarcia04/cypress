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
Cypress.Commands.add("handleModal", () => {
    //make the iframe pop-up a readable height
    cy.get(".ui-dialog").invoke("css", "x", "-500px")
    cy.get(".ui-dialog").invoke("css", "height", "350px")



    //wait for Modal to load
    cy.get("iframe").then(iframe => {
        return new Cypress.Promise(resolve => {
            iframe.on("load", () => {
                resolve(iframe.contents().find("body"));
            });
        });
    });

});

Cypress.Commands.add("selectIframe", () => {
    //Get iframe element
    cy.get("iframe")
        .invoke("contents")
        .invoke("find", "body")
        .then(cy.wrap)
});
