import Cypress, { configure } from '@testing-library/cypress';

configure({ testIdAttribute: 'data-myown-testid' });

// findBy*
Cypress.findByPlaceholderText('foo');
Cypress.findByText('foo');
Cypress.findByLabelText('foo');
Cypress.findByAltText('foo');
Cypress.findByTestId('foo');
Cypress.findByTitle('foo');
Cypress.findByDisplayValue('foo');
Cypress.findByRole('foo');

// findAllBy*
Cypress.findAllByPlaceholderText('foo');
Cypress.findAllByText('foo');
Cypress.findAllByLabelText('foo');
Cypress.findAllByAltText('foo');
Cypress.findAllByTestId('foo');
Cypress.findAllByTitle('foo');
Cypress.findAllByDisplayValue('foo');
Cypress.findAllByRole('foo');

// queryBy*
Cypress.queryByPlaceholderText('foo');
Cypress.queryByText('foo');
Cypress.queryByLabelText('foo');
Cypress.queryByAltText('foo');
Cypress.queryByTestId('foo');
Cypress.queryByTitle('foo');
Cypress.queryByDisplayValue('foo');
Cypress.queryByRole('foo');

// queryAllBy*
Cypress.queryAllByPlaceholderText('foo');
Cypress.queryAllByText('foo');
Cypress.queryAllByLabelText('foo');
Cypress.queryAllByAltText('foo');
Cypress.queryAllByTestId('foo');
Cypress.queryAllByTitle('foo');
Cypress.queryAllByDisplayValue('foo');
Cypress.queryAllByRole('foo');
