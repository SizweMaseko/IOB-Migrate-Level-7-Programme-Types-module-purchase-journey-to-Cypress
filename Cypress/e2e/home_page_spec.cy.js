describe('HomePage', function() {
    describe('home page content', function() {
      beforeEach(() => {
        cy.visit('/')
      })
  
      it('has a title', function() {
        cy.title().should('include', 'Educate, enable and empower | IOB')
      })
  
      describe('hero image', function() {
        it('has a hero image container', function() {
          cy.get('.hero-image-container').should('be.visible')
        })
      })
    })
  })  