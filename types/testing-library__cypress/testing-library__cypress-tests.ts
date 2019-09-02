/// <reference types="Cypress" />
import { configure } from '@testing-library/cypress';

configure({ testIdAttribute: 'data-myown-testid' });

// getBy*
cy.getByPlaceholderText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getBySelectText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByLabelText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByAltText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByTestId('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByTitle('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>

// getAllBy*
cy.getAllByPlaceholderText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getAllBySelectText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getAllByText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getAllByLabelText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getAllByAltText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getAllByTestId('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getAllByTitle('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getAllByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.getAllByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>

// queryBy*
cy.queryByPlaceholderText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryBySelectText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByLabelText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByAltText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByTestId('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByTitle('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByDisplayValue('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryByRole('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>

// queryAllBy*
cy.queryAllByPlaceholderText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
cy.queryAllBySelectText('foo'); // $ExpectType Chainable<JQuery<HTMLElement>>
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
