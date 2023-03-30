describe('Teste no Jornal Opinião de Viamão', () => {
  it('Verifica se as notícias estão sendo carregadas corretamente', () => {
    cy.visit('http://www.jornalopiniaodeviamao.com.br/')
    cy.get('.featured-posts-wrapper > :nth-child(1) > .np-single-post > .np-post-content > .np-post-title > a')
    cy.get('.active > .np-single-slide-wrap > .np-slide-thumb > a > .attachment-news-portal-slider-medium')
      .first().should('be.visible') // Verifica se a primeira notícia é exibida
    cy.get('.active > .np-single-slide-wrap > .np-slide-thumb > a > .attachment-news-portal-slider-medium').click() // Clica no botão "Carregar mais" para carregar mais notícias
    cy.wait(3000) // Espera 3 segundos para que as notícias sejam carregadas
    cy.get('#menu-item-529 > a')
      .last().should('be.visible') // Verifica se a última notícia é exibida
  })
})
