

describe('home page', ()=>{
    it ('app deve estar online', ()=> {
            //Define a resolução da página do teste
            cy.viewport(1440, 900)
            //Código para visitar o site definido na url
            cy.visit('https://buger-eats.vercel.app')
            //Validando se entrou no site, através da mensagem na tela inicial
            cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})