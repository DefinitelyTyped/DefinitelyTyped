// tslint:disable:only-arrow-functions

declare var before: (callback: () => void) => void;
declare var beforeEach: (callback: () => void) => void;
declare var after: (callback: () => void) => void;
declare var afterEach: (callback: () => void) => void;

import * as detox from "detox";
import * as adapter from "detox/runners/mocha/adapter";

// Normally the Detox configuration from the project's package.json like so:
// const config = require("./package.json").detox;
declare const config: any;

// Normally, the beforeEach and afterEach function should take `this` as its argument,
// but `this` cannot be used since it doesn't have a type signature (and therefore always implicltly any)
declare const context: any;

before(async function() {
    await detox.init(config);
});

beforeEach(async function() {
    await adapter.beforeEach(context);
});

afterEach(async function() {
    await adapter.afterEach(context);
});

after(async function() {
    await detox.cleanup();
});
