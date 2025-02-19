import { elements as el } from "./elements";
class Home {
    ValidateSuccessLogin() {
        cy.url().should('eq',  `${baseUrl}/home`)
        cy.screenshot('login home')
    }
    ValidateresearchProduct() {
        //cy.wait(2000);
        cy.get(el.searchField).type('Aerodynamic Linen Car')
        cy.get(el.btnSearch).click()
        cy.get(el.btnAddCart).contains('Adicionar a lista')
    }
}
export default new Home()