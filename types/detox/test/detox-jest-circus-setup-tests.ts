declare var beforeAll: (callback: () => void) => void;
declare var beforeEach: (callback: () => void) => void;
declare var afterAll: (callback: () => void) => void;

import detox = require("detox");
import adapter = require("detox/runners/jest/adapter");
import specReporter = require("detox/runners/jest/specReporter");
import assignReporter = require("detox/runners/jest/assignReporter");

declare const config: any;

detoxCircus.getEnv().addEventsListener(adapter);
detoxCircus.getEnv().addEventsListener(specReporter);
detoxCircus.getEnv().addEventsListener(assignReporter);

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
