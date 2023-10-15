// Type definitions for happo-cypress 4.1
// Project: https://github.com/happo/happo-cypress#readme
// Definitions by: Alexander Polyankin <https://github.com/alexanderpolyankin>
//                 Mario Beltrán Alarcón <https://github.com/Belco90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="cypress" />

export interface HappoScreenshotTarget {
    name: string;
    browser: string;
    viewport: string;
}

export interface HappoScreenshotOptions {
    component?: string | undefined;
    variant?: string | undefined;
    targets?: ReadonlyArray<string | HappoScreenshotTarget> | undefined;
    responsiveInlinedCanvases?: boolean | undefined;
    transformDOM?: HappoTransformDOMOptions | undefined;
    includeAllElements?: boolean | undefined;
}

export interface HappoTransformDOMOptions {
    selector: string;
    transform: (element: Element, document: Document) => Element;
}

export interface HappoHideDynamicElementsOptions {
    matchers?: ReadonlyArray<RegExp> | undefined;
    defaultMatchers?: ReadonlyArray<RegExp> | undefined;
    selectors?: ReadonlyArray<string> | undefined;
    defaultSelectors?: ReadonlyArray<string> | undefined;
    replace?: boolean | undefined;
}

declare global {
    namespace Cypress {
        interface Chainable {
            happoScreenshot(options?: HappoScreenshotOptions): void;
            happoHideDynamicElements(options?: HappoHideDynamicElementsOptions): void;
        }
    }
}
