/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade de pré cadastro', () => {

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
it('Deve completar o pré cadastro com sucesso', () => {
    cy.get('#reg_email').type(faker.internet.email()) 
    cy.get('#reg_password').type('Cachorroquente@22')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type('joao')
    cy.get('#account_last_name').type('costa')
    cy.get('.woocommerce-Button').click()

    
});



});

