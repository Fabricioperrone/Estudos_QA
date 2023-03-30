describe('Teste do formulário de contato', () => {
    it('Preenche o formulário com nome, email, assunto e mensagem', () => {
      cy.visit('http://localhost/financapessoais/index.php/contato/') // Acessa a página de contato
      cy.get('input[name="nome"]').type('Fulano de Tal') // Insere o nome do remetente
      
    })
  })
  