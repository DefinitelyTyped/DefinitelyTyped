// Type definitions for jest-environment-puppeteer 4.3
// Project: https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer
// Definitions by: Josh Goldberg <https://github.com/joshuakgoldberg>
//                 Ifiok Jr. <https://github.com/ifiokjr>
//                 Jeroen Claassens <https://github.com/favna>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import { JestEnvironment } from '@jest/environment';
import { JestFakeTimers as FakeTimers } from '@jest/fake-timers';
import { Circus, Global as GlobalType, Config } from '@jest/types';
import { ModuleMocker } from 'jest-mock';
import { Browser, Page, BrowserContext } from 'puppeteer';
import { Script, Context } from 'vm';

interface JestPuppeteer {
    /**
     * Reset global.page
     *
     * ```ts
     * beforeEach(async () => {
     *   await jestPuppeteer.resetPage()
     * })
     * ```
     */
    resetPage(): Promise<void>;

    /**
     * Reset global.browser
     *
     * ```ts
     * beforeEach(async () => {
     *   await jestPuppeteer.resetBrowser()
     * })
     * ```
     */
    resetBrowser(): Promise<void>;

    /**
     * Suspends test execution and gives you opportunity to see what's going on in the browser
     * - Jest is suspended (no timeout)
     * - A debugger instruction to Chromium, if Puppeteer has been launched with { devtools: true } it will stop
     *
     * ```ts
     * it('should put test in debug mode', async () => {
     *   await jestPuppeteer.debug()
     * })
     * ```
     */
    debug(): Promise<void>;
}

interface Timer {
    id: number;
    ref: () => Timer;
    unref: () => Timer;
}

interface Global extends GlobalType.Global {
    browser: Browser;
    context: Context;
    page: Page;
    jestPuppeteer: JestPuppeteer;
}

/** Note: TestEnvironment is sandboxed. Each test suite will trigger setup/teardown in their own TestEnvironment. */
declare class PuppeteerEnvironment implements JestEnvironment {
  context: Context | null;
  fakeTimers: FakeTimers<Timer> | null;
  global: Global;
  moduleMocker: ModuleMocker | null;
  constructor(config: Config.ProjectConfig);

  /**
   * Setup runs when the environment is being spun up, generally before each test suite
   * You should always call `await super.setup()` in here
   */
  setup(): Promise<void>;

  /**
   * Teardowns runs as the environment is being torn down, generally after each test suite.
   * You should always call `await super.tearDown()` in here
   */
  teardown(): Promise<void>;
  runScript(script: Script): any;
  handleTestEvent?(event: Circus.Event, state: Circus.State): void;
}

declare global {
    const browser: Browser;
    const context: BrowserContext;
    const page: Page;
    const jestPuppeteer: JestPuppeteer;
}

export = PuppeteerEnvironment;
