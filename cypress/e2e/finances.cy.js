

describe('Transações', () => {

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    });


    it('Cadastrar uma entrada', () => {

        criarTransação("Freelas", 3000, "2023-03-23")
        //criarTransação("Freelas 2", 5000, "2023-03-23")
//        cy.contains("+ Nova Transação").click()
//        cy.get('#description').type("Freelas")
//        cy.get('#amount').type("40000")
//        cy.get('#date').type("2023-02-15")
//        cy.contains("button", "Salvar").click()

        cy.get(".description").should("have.text", "Freelas")
        
    }); 


    it('Cadastrar uma sa´da', () => {

        criarTransação("Compras", -100, "2023-03-24")
        cy.get(".description").should("have.text", "Compras")

    });

    it('Excluir uma entrada', () => {
        criarTransação("Freelas", 3000, "2023-03-23")
        criarTransação("Freelas 2", 3000, "2023-03-23")
        
        cy.contains(".description","Freelas")
        .parent()
        .find("img")
        .click()

        cy.get('tbody tr').should('have.length', 1)

    });
});

  


function criarTransação(descricao, valor, data) {
    cy.contains("+ Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type(data)
    cy.contains("button", "Salvar").click()
}