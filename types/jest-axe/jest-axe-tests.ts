import { configureAxe, axe, toHaveNoViolations, JestAxe } from "jest-axe";

expect.extend(toHaveNoViolations);

const newJestWithDefaults: JestAxe = configureAxe();

const newJestWithOptions: JestAxe = configureAxe({
    elementRef: false,
    iframes: false,
    rules: {},
    runOnly: {
        type: "rules",
    },
    selectors: false,
});

const sameJest: JestAxe = axe;

expect("").toHaveNoViolations();
