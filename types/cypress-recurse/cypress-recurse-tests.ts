import { recurse, RecurseDefaults } from 'cypress-recurse';

recurse(
    () => cy.task('randomNumber'),
    n => n === 7,
);
recurse(
    () => cy.wrap(4),
    x => {
        expect(x).to.equal(4);
    },
).should('equal', 4);
recurse(
    () => cy.wrap(7),
    n => n === 7,
).should('equal', 7);
recurse(
    () => cy.task('randomNumber'),
    n => n === 7,
    {
        log: RecurseDefaults.log,
        limit: RecurseDefaults.limit,
        timeout: RecurseDefaults.timeout,
        delay: RecurseDefaults.delay,
    },
);
recurse(
    () => cy.window().invoke('fetch', 'https://example.com'),
    ({ ok }) => ok,
    {
        post: ({ limit }) => {
            if (limit === 1) {
                return cy.intercept('GET', 'https://example.com', 'Hello!').as('hello');
            }
        },
    },
);
