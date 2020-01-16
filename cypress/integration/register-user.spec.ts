/// <reference types="Cypress" />

describe('Register User', () => {
    beforeEach(() => {
        cy.visit('/register')
    })
    it('should load register user page', () => {
        cy.contains('User Information').should('exist')
    })
    describe('form:validation', () => {
        beforeEach(() => {
            cy.contains('Submit').click();

        })
        it('first name is required', () => {
            cy.contains('First Name is required Field').should('exist')
        })
        it('last name is required', () => {
            cy.contains('Last Name is required Field').should('exist')
        })
        it('phone is required', () => {
            cy.contains('Phone is required Field').should('exist')
        })
        it('email is required', () => {
            cy.contains('Email is required Field').should('exist')
        })
        it('email should be valid', () => {
            cy.get('[data-test="input-firstname"]').type('nilesh')
            cy.get('[data-test="input-lastname"]').type('nilesh')
            cy.get('[data-test="input-email"]').type('nilesh').blur()
            cy.contains('Invaid Email').should('exist')
        })

    })
    describe('Form submission', () => {
        beforeEach(() => {
            cy.contains('Submit').click();

        })
        it('on form submission, modal window  should pop up', () => {
            cy.get('[data-test="input-firstname"]').type('nilesh')
            cy.get('[data-test="input-lastname"]').type('patel')
            cy.get('[data-test="input-phone"]').type('950444444')
            cy.get('[data-test="input-email"]').type('nilesh@gmail.com')
            cy.contains('Submit').click().then(() => {
                cy.contains('Submit').should('exist')
                cy.contains('Cancel').should('exist')
            });
        })
        it(' on form submission confirmation, should be redirected to thnank you page', () => {
            cy.get('[data-test="input-firstname"]').type('nilesh')
            cy.get('[data-test="input-lastname"]').type('patel')
            cy.get('[data-test="input-phone"]').type('950444444')
            cy.get('[data-test="input-email"]').type('nilesh@gmail.com')
            cy.contains('Submit').click();
            cy.contains("Confirm").click()
            cy.contains('Thank You').should('exist')
            // cy.location().should(loc => {
            //     expect(loc.pathname).to.eq('/register-feedback')
            // })
            cy.location('pathname').should('eq','/register-feedback')
        })
    })
})