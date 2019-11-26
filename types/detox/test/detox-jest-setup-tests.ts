declare var beforeAll: (callback: () => void) => void;
declare var beforeEach: (callback: () => void) => void;
declare var afterAll: (callback: () => void) => void;

import detox = require("detox");
import adapter = require("detox/runners/jest/adapter");
import specReporter = require("detox/runners/jest/specReporter");

// Normally the Detox configuration from the project's package.json like so:
// const config = require("./package.json").detox;
declare const config: any;

declare const jasmine: any;
jasmine.getEnv().addReporter(adapter);
jasmine.getEnv().addReporter(specReporter);

beforeAll(async () => {
    await detox.init(config);

    const initOptions: Detox.DetoxInitOptions = {
        initGlobals: false,
        launchApp: false,
        reuse: false,
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
