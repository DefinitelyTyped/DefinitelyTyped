declare var beforeAll: (callback: () => void) => void;
declare var beforeEach: (callback: () => void) => void;
declare var afterAll: (callback: () => void) => void;

import adapter from "detox/runners/jest/adapters";

// Normally the Detox configuration from the project's package.json like so:
// const config = require("./package.json").detox;
declare const config: any;

beforeAll(async () => {
    await detox.init(config);

    const initOptions: Detox.DetoxInitOptions = {
        initGlobals: false,
        launchApp: false,
    };
    await detox.init(config, initOptions);
});

beforeEach(async () => {
    await adapter.beforeEach();
});

afterAll(async () => {
    await adapter.afterAll();
    await detox.cleanup();
});
