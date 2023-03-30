describe('Automção Amazon', () => {
    it.only('Login com sucesso', () => {
        // Acessa a página inicial da Amazon
        cy.visit('https://www.amazon.com.br/ref=nav_logo')

        // Clica no botão "Login"
        cy.get('#nav-link-accountList-nav-line-1').click()


        // Insere o email e senha da conta criada anteriormente
        cy.get('#ap_email').type('example.seuemail.com.br')
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type('example.suasenha')
        




        // Clica no botão "Entrar"
        cy.get('#signInSubmit').click({ multiple: true })
        cy.get('.a-column')
        // Verifica se o login foi efetuado corretamente

        cy.contains('Olá, Fabrício').should('be.visible')
    })
    it.only('Usando filtro de pesquisa de produtos', function () {
        cy.get('input[type="text"]')
            .should('be.visible')
            .type('Código Limpo')
            .should('have.value', 'Código Limpo')
       // cy.wait(3000)
        cy.get('#nav-search-submit-button').click()
    })
    it('Selecionando um produto', function () {
      //  cy.get('div.a-section.aok-relative.s-image-square-aspect').click()
        cy.get('[data-index="1"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
       
    })
    it('Adicionando produto no carrinho de compras', function () {
        //cy.get('input#add-to-cart-button.a-button-input').click()
    
    })

    it('Login com informações inválidas', () => {
        // Acessa a página inicial da Amazon
        cy.visit('https://www.amazon.com.br/')

        // Clica no botão "Login"
        cy.get('#nav-link-accountList-nav-line-1').click({ multiple: true })

        // Insere informações de login inválidas
        cy.get('#ap_email').type('email_invalido')
        cy.get('#ap_password').type('senha_invalida')

        // Clica no botão "Entrar"
        cy.get('#signInSubmit').click()

        // Verifica se o sistema apresenta uma mensagem de erro apropriada
        cy.contains('Não foi possível efetuar o login').should('be.visible')
    })
})
