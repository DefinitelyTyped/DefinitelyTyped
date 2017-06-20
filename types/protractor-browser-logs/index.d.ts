// Type definitions for protractor-browser-logs 1.0
// Project: https://www.npmjs.com/package/protractor-browser-logs, https://github.com/wix/protractor-browser-logs
// Definitions by: Saqib Rokadia <https://github.com/rokadias>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as webdriver from 'selenium-webdriver';
import Entry = webdriver.logging.Entry;
import { ProtractorBrowser } from 'protractor/built';

export interface BrowserLogOptions {
    reporters?: Array<(entries: Entry[]) => void>;
}

export type matchPredicateFunction = (entry: Entry) => boolean;
export type matchPredicate = string | RegExp | matchPredicateFunction;
export interface BrowserLogs {
    ERROR: matchPredicateFunction;
    WARNING: matchPredicateFunction;
    DEBUG: matchPredicateFunction;
    INFO: matchPredicateFunction;
    LOG: matchPredicateFunction;

    or(a: matchPredicateFunction, b: matchPredicateFunction): matchPredicateFunction;
    and(a: matchPredicateFunction, b: matchPredicateFunction): matchPredicateFunction;
    reset(): void;
    logs(): Entry[];
    verify(): void;
    ignore(... matches: matchPredicate[]): matchPredicateFunction[];
    expect(... matches: matchPredicate[]): matchPredicateFunction[];
}

export default function browserLogs(browser: ProtractorBrowser, options?: BrowserLogOptions): BrowserLogs;
