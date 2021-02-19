/// <reference types="cypress" />
import 'happo-cypress';

// $ExpectType void
cy.get('foo').happoSnapshot();

// $ExpectType void
cy.get('foo').happoSnapshot({});

// $ExpectType void
cy.get('foo').happoSnapshot({
    component: 'Header',
    variant: 'dark',
    targets: ['chrome-desktop'],
    responsiveInlinedCanvases: true,
    transformDOM: {
        selector: 'iframe',
        transform: element => element,
    },
});

// $ExpectType void
cy.happoHideDynamicElements();

// $ExpectType void
cy.happoHideDynamicElements({});

// $ExpectType void
cy.happoHideDynamicElements({
    matchers: [/liked by [0-9]+ people/],
    defaultMatchers: [/liked by [0-9]+ people/],
    selectors: ['iframe'],
    defaultSelectors: ['iframe'],
    replace: true,
});
