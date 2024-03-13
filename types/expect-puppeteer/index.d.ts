/// <reference types="jest" />

import { Dialog, ElementHandle, Page } from "puppeteer";

/**
 * Interval at which pageFunctions may be executed.
 */
type ExpectPolling = number | "mutation" | "raf";

interface MatchSelector {
    /**
     * A selector type
     */
    type: "css" | "xpath";

    /**
     * The selector string
     */
    value: string;
}

/**
 * Default options that apply to all expectations and can be set globally
 */
interface ExpectDefaultOptions {
    /**
     * An interval at which the pageFunction is executed. Defaults to "raf".
     */
    polling?: ExpectPolling | undefined;

    /**
     * Maximum time to wait for in milliseconds. Defaults to 500.
     */
    timeout?: number | undefined;
}

/**
 * Configures how to poll for an element.
 */
interface ExpectTimingActions extends ExpectDefaultOptions {
    /**
     * delay to pass to the puppeteer element.type API
     */
    delay?: number | undefined;
}

interface ExpectToClickOptions extends ExpectTimingActions {
    /**
     * Defaults to left.
     */
    button?: "left" | "right" | "middle" | undefined;

    /**
     * defaults to 1. See UIEvent.detail.
     */
    clickCount?: number | undefined;

    /**
     * Time to wait between mousedown and mouseup in milliseconds. Defaults to 0.
     */
    delay?: number | undefined;

    /**
     * A text or a RegExp to match in element textContent.
     */
    text?: string | RegExp | undefined;

    /**
     * wait for element to be present in DOM and to be visible, i.e. to not have display: none or visibility: hidden CSS properties. Defaults to false.
     */
    visible?: boolean | undefined;
}

interface ExpectPuppeteer {
    // These must all match the ExpectPuppeteer interface above.
    // We can't extend from it directly because some method names conflict in type-incompatible ways.
    toClick(selector: string | MatchSelector, options?: ExpectToClickOptions): Promise<void>;
    toDisplayDialog(block: () => Promise<void>): Promise<Dialog>;
    toFill(selector: string | MatchSelector, value: string, options?: ExpectTimingActions): Promise<void>;
    toFillForm(
        selector: string | MatchSelector,
        value: { [key: string]: any },
        options?: ExpectTimingActions,
    ): Promise<void>;
    toMatch(selector: string | MatchSelector, options?: ExpectTimingActions): Promise<void>;
    toMatchElement(selector: string | MatchSelector, options?: ExpectToClickOptions): Promise<void>;
    toSelect(selector: string | MatchSelector, valueOrText: string, options?: ExpectTimingActions): Promise<void>;
    toUploadFile(selector: string | MatchSelector, filePath: string, options?: ExpectTimingActions): Promise<void>;
}

declare global {
    namespace jest {
        interface Matchers<R, T> {
            // These must all match the ExpectPuppeteer interface above.
            // We can't extend from it directly because some method names conflict in type-incompatible ways.
            toClick(selector: string | MatchSelector, options?: ExpectToClickOptions): Promise<void>;
            toDisplayDialog(block: () => Promise<void>): Promise<Dialog>;
            toFill(selector: string | MatchSelector, value: string, options?: ExpectTimingActions): Promise<void>;
            toFillForm(
                selector: string | MatchSelector,
                value: { [key: string]: any },
                options?: ExpectTimingActions,
            ): Promise<void>;
            toMatch(matcher: string | RegExp, options?: ExpectTimingActions): Promise<void>;
            toMatchElement(selector: string | MatchSelector, options?: ExpectToClickOptions): Promise<ElementHandle>;
            toSelect(
                selector: string | MatchSelector,
                valueOrText: string,
                options?: ExpectTimingActions,
            ): Promise<void>;
            toUploadFile(
                selector: string | MatchSelector,
                filePath: string,
                options?: ExpectTimingActions,
            ): Promise<void>;
        }
    }
}

declare function expectPuppeteer(instance: ElementHandle | Page): ExpectPuppeteer;

declare namespace expectPuppeteer {
    function setDefaultOptions(options: ExpectDefaultOptions): void;
    function getDefaultOptions(): ExpectDefaultOptions;
}

export = expectPuppeteer;
