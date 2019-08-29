import Cypress, { configure } from '@testing-library/cypress';

configure({ testIdAttribute: 'data-myown-testid' });

// getBy*
Cypress.getByPlaceholderText('foo');
Cypress.getBySelectText('foo');
Cypress.getByText('foo');
Cypress.getByLabelText('foo');
Cypress.getByAltText('foo');
Cypress.getByTestId('foo');
Cypress.getByTitle('foo');
Cypress.getByDisplayValue('foo');
Cypress.getByRole('foo');

// getAllBy*
Cypress.getAllByPlaceholderText('foo');
Cypress.getAllBySelectText('foo');
Cypress.getAllByText('foo');
Cypress.getAllByLabelText('foo');
Cypress.getAllByAltText('foo');
Cypress.getAllByTestId('foo');
Cypress.getAllByTitle('foo');
Cypress.getAllByDisplayValue('foo');
Cypress.getAllByRole('foo');

// queryBy*
Cypress.queryByPlaceholderText('foo');
Cypress.queryBySelectText('foo');
Cypress.queryByText('foo');
Cypress.queryByLabelText('foo');
Cypress.queryByAltText('foo');
Cypress.queryByTestId('foo');
Cypress.queryByTitle('foo');
Cypress.queryByDisplayValue('foo');
Cypress.queryByRole('foo');

// queryAllBy*
Cypress.queryAllByPlaceholderText('foo');
Cypress.queryAllBySelectText('foo');
Cypress.queryAllByText('foo');
Cypress.queryAllByLabelText('foo');
Cypress.queryAllByAltText('foo');
Cypress.queryAllByTestId('foo');
Cypress.queryAllByTitle('foo');
Cypress.queryAllByDisplayValue('foo');
Cypress.queryAllByRole('foo');
