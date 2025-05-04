describe('login', () => {
  //hooks
  //before - executar 1 vez antes de todos os testes
  //beforeEach - executa 1 vez para cada teste
  //after - executa 1 vez depois de todos os testes
  //afterit - executa uma vez depois de cada teste


  beforeEach(()=>{
    cy.acessarHome()

  })
  it('login realizado com sucesso', () => {
    const usuario = {
     email: 'renato.stabelino@e2etreinamentos.com.br',
     password: 'Reh1@@81995'
    }
    //preencher o formulario
    cy.preencherFormLogin(usuario.email, usuario.password)
    //clicar no botao
    cy.submitBtn("Acessar")
    //verificar se o login foi relizado com sucesso
   cy.verificarMsgToast("Login realizado com sucesso!")
  })







it('login invalido, email em formato invalido', () => {
  const usuario = {
   email: 'renato.stabelino-e2etreinamentos.com.br',
   password: 'Reh1@@81995'
  }
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn("Acessar")
    cy.verificarMsgAlert("Por favor, insira um e-mail válido.")
})







it('login invalido, email em branco', () => {
  const usuario = {
   email: ' ',
   password: 'Reh1@@81995'
  }
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn("Acessar")
    cy.verificarMsgAlert("O campo de e-mail é obrigatório.")

})







it('login invalido, senha em formato invalido', () => {
  const usuario = {
   email: 'renato.stabelino@e2etreinamentos.com.br',
   password: 'reh10081995'
  }
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn("Acessar")
    cy.verificarMsgToast("Credenciais inválidas. Verifique seu e-mail e senha.")

})






it('login invalido, campo senha em branco', () => {
  const usuario = {
   email: 'renato.stabelino@e2etreinamentos.com.br',
   password: ' '
  }
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn("Acessar")
    cy.verificarMsgAlert("O campo de senha é obrigatório.")

})








it('login invalido, todos os campos em branco', () => {
  const usuario = {
   email: ' ',
   password: ' '
  }
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn("Acessar")
    cy.verificarMsgAlert("O campo de senha é obrigatório.")
    cy.verificarMsgAlert("O campo de e-mail é obrigatório.")

})

})
