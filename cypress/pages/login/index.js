import { elements as el } from './elements';

class Login {

    visitPage() {
        cy.visit('/')
    }

    FillValidUserCredentials () {
        cy.get(el.email).type('rubens@test.com')
        cy.get(el.password).type('123456789')
        cy.get(el.btnEnter).click()
    }
    FillInvalidUserCredentials() {
        cy.get(el.email).focus().clear();
        cy.get(el.email).type('rubens_error@test.com')
        cy.get(el.password).focus().clear();
        cy.get(el.password).type('123456')
        cy.get(el.btnEnter).click()
    }
    ErrorMessageLogin() {
        cy.contains('Email e/ou senha inválidos')
    }
}
export default new Login()