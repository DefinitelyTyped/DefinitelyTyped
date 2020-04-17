/// <reference types="Cypress" />
import { configure } from '@testing-library/cypress';
import '@testing-library/cypress/add-commands';

configure({ testIdAttribute: 'data-myown-testid' });

// findBy*
cy.findByPlaceholderText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findByText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findByLabelText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findByAltText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findByTestId('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findByTitle('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>

// findAllBy*
cy.findAllByPlaceholderText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findAllByText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findAllByLabelText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findAllByAltText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findAllByTestId('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findAllByTitle('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findAllByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.findAllByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>

// queryBy*
cy.queryByPlaceholderText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByLabelText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByAltText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByTestId('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByTitle('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>

// queryAllBy*
cy.queryAllByPlaceholderText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByLabelText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByAltText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByTestId('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByTitle('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>

// with container option
const container = document.createElement('div');
cy.queryAllByRole('foo', { container }); // $ExpectType Chainable<JQuery<HTMLElement>>

const $container = cy.$$('body').append('div');
cy.queryAllByRole('foo', { container: $container }); // $ExpectType Chainable<JQuery<HTMLElement>>
