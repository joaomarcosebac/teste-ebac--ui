/// <reference types="cypress" />

const { should } = require("chai");

describe('funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.click()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()


    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
            cy.get('.button-variable-item-L').click()
            cy.get('.button-variable-item-Green').click()
            cy.get('.input-text').clear().type(2)
            cy.get('.single_add_to_cart_button').click()

            
    });
})