Cypress.Commands.add('acessarHome', () => {
    cy.visit("/")
    cy.url().should('include', '/')
    cy.contains('h1', 'Faça seu login')
    //CHECKPOINT
})

Cypress.Commands.add('preencherFormLogin', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)

})

Cypress.Commands.add('submitBtn', (textoBtn) => {
    cy.contains('button[type=submit]', textoBtn).click();
})

Cypress.Commands.add('verificarMsgToast', (msgEsperada) => {
    cy.get('.Toastify__toast-body')
        .should('be.visible')
        .and('have.text', msgEsperada)


})

Cypress.Commands.add('verificarMsgAlert', (msgEsperada) => {
    cy.get('[class^="home_errorText"]')
        .should('be.visible')
        .and('contain.text', msgEsperada)
        .and('have.css', 'color', 'rgb(230, 57, 70)');

})


Cypress.Commands.add('verificarPage', (rota, tituloPage) => {
    cy.url().should('include', `${rota}`)
    cy.contains('h1', tituloPage)

})

Cypress.Commands.add('submitBtnBaixarApp', (textoBtn) => {
    cy.contains('.appinfo_yellowButton__j7S5v', textoBtn).click();
})

Cypress.Commands.add('verificarUrl', (rota) => {
    cy.url().should('include', `${rota}`)
   

})


Cypress.Commands.add('verificaMsgBoasVindas', (name) => {
    const nomeUsuario = name.split(" ")[0]
    
    cy.get('[data-testid="user-greeting"]')
        .should('be.visible')
        .and('have.text', `Olá, ${nomeUsuario}!`)
 })