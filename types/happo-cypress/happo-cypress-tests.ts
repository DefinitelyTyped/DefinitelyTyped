import "happo-cypress";

// $ExpectType void
cy.get("foo").happoScreenshot();

// $ExpectType void
cy.get("foo").happoScreenshot({});

// $ExpectType void
cy.get("foo").happoScreenshot({
    component: "Header",
    variant: "dark",
    targets: ["chrome-desktop"],
    responsiveInlinedCanvases: true,
    transformDOM: {
        selector: "iframe",
        transform: element => element,
    },
    includeAllElements: true,
});

// $ExpectType void
cy.happoHideDynamicElements();

// $ExpectType void
cy.happoHideDynamicElements({});

// $ExpectType void
cy.happoHideDynamicElements({
    matchers: [/liked by [0-9]+ people/],
    defaultMatchers: [/liked by [0-9]+ people/],
    selectors: ["iframe"],
    defaultSelectors: ["iframe"],
    replace: true,
});

// $ExpectType void
cy.get("foo").happoScreenshot({
    component: "Header",
    targets: ["chrome-desktop", {
        name: "dynamic-target",
        browser: "chrome",
        viewport: "100x100",
    }],
});
