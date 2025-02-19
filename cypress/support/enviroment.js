export function env() {
    if (Cypress.env('enviroment') === 'ui') {
        Cypress.env('URL', Cypress.env('url_ui'));
       // Cypress.env('user', Cypress.env('homolUser'));
    } else if (Cypress.env('enviroment') === 'api') {
        Cypress.env('URL', Cypress.env('url_api'));
        ///Cypress.env('user', Cypress.env('prodUser'));
    }
}