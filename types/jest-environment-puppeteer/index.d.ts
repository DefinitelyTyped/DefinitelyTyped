// Type definitions for jest-environment-puppeteer 4.0
// Project: https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer
// Definitions by: Josh Goldberg <https://github.com/joshuakgoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Browser, Page } from "puppeteer";

interface JestPuppeteer {
    resetPage(): Promise<void>;
    debug(): Promise<void>;
}

declare global {
    const browser: Browser;
    const page: Page
    const jestPuppeteer: JestPuppeteer;
}

export { };
