/// <reference types="node" />
/// <reference types="cypress" />

// tslint:disable-next-line:no-var-requires
import 'cypress-dark';
// tslint:disable-next-line:no-var-requires
import 'cypress-dark/src/halloween';

Cypress.config({
    baseUrl: 'https://myapp.com',
    theme: 'dark',
});
