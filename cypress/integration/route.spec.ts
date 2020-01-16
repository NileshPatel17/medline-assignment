/// <reference types="Cypress" />

describe('Validate Routes', () => {
    it('should redirect to /register route', () => {
        cy.visit('/');
        cy.contains('Account Registration').should('exist')
        cy.location('pathname').should('eq','/register')
    })
    it('should redirect to /register-feedback route', () => {
        cy.visit('/register-feedback');
        cy.contains('Thank You').should('exist')
        cy.location('pathname').should('eq','/register-feedback')
    })
    it('should redirect to /404', () => {
        cy.visit('/random');
        cy.contains('404').should('exist')
        cy.contains('Page not found').should('exist')
        cy.location('pathname').should('eq','/404')
    })
})
