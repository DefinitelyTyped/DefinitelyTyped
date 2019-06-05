// Type definitions for jest-environment-puppeteer 4.0
// Project: https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer
// Definitions by: Josh Goldberg <https://github.com/joshuakgoldberg>
//                 Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Browser, Page, BrowserContext } from 'puppeteer';

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

declare global {
    const browser: Browser;
    const context: BrowserContext;
    const page: Page;
    const jestPuppeteer: JestPuppeteer;
}

export {};
