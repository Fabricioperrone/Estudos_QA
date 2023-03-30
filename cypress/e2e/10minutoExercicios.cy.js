
describe('Aplicação 10 Minutos Exercícios', function () {
    const THREE_SECONDS_IN_MS = 3000
    beforeEach(function () {
        cy.visit('http://localhost/10minutosexercicios/')
    })
    it('Verifica o título da aplicação', function () {
        cy.title().should('be.equal', '10 minutos exercícios – Crie uma rotina de exercícios e obtenha uma melhor qualidade de vida')
    })
    it('Teste de Usabilidade, navegação menu', function () {
        cy.get('#menu-item-74 > a').click()
        cy.get('#menu-item-75 > a').click()
        cy.get('#menu-item-76 > a').click()
        cy.get('#menu-item-77 > a').click()
        cy.get('#menu-item-78 > a').click()
        cy.contains('Home').should('be.visible')

        cy.contains('Exercícios').should('be.visible')

        cy.contains('Programa').should('be.visible')

        cy.contains('Receitas').should('be.visible')

        cy.contains('Download').should('be.visible')

        cy.contains('Blog').should('be.visible')

    })
    it('Disparando botão, Veja mais', function () {
        cy.get('.slide-item-1 > .slide-inner > .roll-button')
        cy.contains('Veja mais!').should('be.visible')
    })
    it('Teste de Barra de Rolagem', function () {
   
        cy.scrollTo(0, 10000) // Scroll the window 500px down
        cy.get('.slide-item-1 > .slide-inner > .roll-button').should('be.visible')
        
        
        
    })

})