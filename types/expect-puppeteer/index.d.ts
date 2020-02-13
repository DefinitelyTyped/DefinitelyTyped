// Type definitions for expect-puppeteer 4.4
// Project: https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg>
//                 Tanguy Krotoff <https://github.com/tkrotoff>
//                 Jason Mong <https://github.com/jfm710>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="jest" />

import { ElementHandle, Page, Dialog } from "puppeteer";

/**
 * Interval at which pageFunctions may be executed.
 */
type ExpectPolling = number | "mutation" | "raf";

/**
 * Configures how to poll for an element.
 */
interface ExpectTimingActions {
    /**
     * An interval at which the pageFunction is executed. Defaults to "raf".
     */
    polling?: ExpectPolling;

    /**
     * Maximum time to wait for in milliseconds. Defaults to 500.
     */
    timeout?: number;

    /**
     * delay to pass to the puppeteer element.type API
     */
    delay?: number;
}

interface ExpectToClickOptions extends ExpectTimingActions {
    /**
     * Defaults to left.
     */
    button?: "left" | "right" | "middle";

    /**
     * defaults to 1. See UIEvent.detail.
     */
    clickCount?: number;

    /**
     * Time to wait between mousedown and mouseup in milliseconds. Defaults to 0.
     */
    delay?: number;

    /**
     * A text or a RegExp to match in element textContent.
     */
    text?: string | RegExp;

    /**
     * wait for element to be present in DOM and to be visible, i.e. to not have display: none or visibility: hidden CSS properties. Defaults to false.
     */
    visible?: boolean;
}

interface ExpectPuppeteer {
    // These must all match the ExpectPuppeteer interface above.
    // We can't extend from it directly because some method names conflict in type-incompatible ways.
    toClick(selector: string, options?: ExpectToClickOptions): Promise<void>;
    toDisplayDialog(block: () => Promise<void>): Promise<Dialog>;
    toFill(selector: string, value: string, options?: ExpectTimingActions): Promise<void>;
    toMatch(selector: string, options?: ExpectTimingActions): Promise<void>;
    toMatchElement(selector: string, options?: ExpectToClickOptions): Promise<void>;
    toSelect(selector: string, valueOrText: string, options?: ExpectTimingActions): Promise<void>;
    toUploadFile(selector: string, filePath: string, options?: ExpectTimingActions): Promise<void>;
}

declare global {
    namespace jest {
        // tslint:disable-next-line no-empty-interface
        interface Matchers<R, T> {
            // These must all match the ExpectPuppeteer interface above.
            // We can't extend from it directly because some method names conflict in type-incompatible ways.
            toClick(selector: string, options?: ExpectToClickOptions): Promise<void>;
            toDisplayDialog(block: () => Promise<void>): Promise<Dialog>;
            toFill(selector: string, value: string, options?: ExpectTimingActions): Promise<void>;
            toFillForm(selector: string, value: { [key: string]: any}, options?: ExpectTimingActions): Promise<void>;
            toMatch(selector: string, options?: ExpectTimingActions): Promise<void>;
            toMatchElement(selector: string, options?: ExpectToClickOptions): Promise<ElementHandle>;
            toSelect(selector: string, valueOrText: string, options?: ExpectTimingActions): Promise<void>;
            toUploadFile(selector: string, filePath: string, options?: ExpectTimingActions): Promise<void>;
        }
    }
}

declare function expectPuppeteer(instance: ElementHandle | Page): ExpectPuppeteer;
export = expectPuppeteer;
