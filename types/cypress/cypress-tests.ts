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

cy
  .get('form')
  .find('input')
  .then($input => $input.click());

cy
  .wrap({ sum: (a: number, b: number, c: number) => a + b + c })
  .invoke('sum', 2, 4, 6);

cy
  .get('ul>li')
  .each(($el, index, $list) => {
      // $el is wrapped jquery element
      if ($el.someMethod() === "something") {
        // wrap this element so we can
        // use cypress commands on it
        cy.wrap($el).click();
      } else {
        // do something else
      }
    })
    .spread((x , y, z) => {
        x + y + z;
    });
