// Samples taken from the cypress kitchen sink example (https://github.com/cypress-io/cypress-example-kitchensink)
cy.title().should('include', 'Kitchen Sink');

cy
  .get('.query-list')
  .contains('bananas').should('have.class', 'third')
  .contains(/^b\w+/).should('have.class', 'third')
  .get('.query-list')
  .contains('apples').should('have.class', 'first')
  .get('#querying')
  .contains('ul', 'oranges').should('have.class', 'query-list')
  .get('.query-button')
  .contains('Save Form').should('have.class', 'btn');
