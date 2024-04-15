import NodeEnvironment = require("jest-environment-node");
import { Browser, BrowserContext, Page } from "puppeteer";
import { Context } from "vm";

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

interface Global extends NonNullable<NodeEnvironment["global"]> {
    browser: Browser;
    context: Context;
    page: Page;
    jestPuppeteer: JestPuppeteer;
}

/** Note: TestEnvironment is sandboxed. Each test suite will trigger setup/teardown in their own TestEnvironment. */
declare class PuppeteerEnvironment extends NodeEnvironment {
    global: Global;
}

declare global {
    const browser: Browser;
    const context: BrowserContext;
    const page: Page;
    const jestPuppeteer: JestPuppeteer;
}

export = PuppeteerEnvironment;
