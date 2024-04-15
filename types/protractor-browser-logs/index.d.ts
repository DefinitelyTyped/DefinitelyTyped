import * as webdriver from "selenium-webdriver";
import Entry = webdriver.logging.Entry;
import { ProtractorBrowser } from "protractor/built";

declare namespace browserLogs {
    interface BrowserLogOptions {
        reporters?: Array<(entries: Entry[]) => void> | undefined;
    }

    type matchPredicateFunction = (entry: Entry) => boolean;
    type matchPredicate = string | RegExp | matchPredicateFunction;
    interface BrowserLogs {
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
        ignore(...matches: matchPredicate[]): matchPredicateFunction[];
        expect(...matches: matchPredicate[]): matchPredicateFunction[];
    }
}

export = browserLogs;
declare function browserLogs(
    browser: ProtractorBrowser,
    options?: browserLogs.BrowserLogOptions,
): browserLogs.BrowserLogs;
