// Type definitions for happo-cypress 1.17
// Project: https://github.com/happo/happo-cypress#readme
// Definitions by: Alexander Polyankin <https://github.com/alexanderpolyankin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface HappoScreenshotOptions {
    component?: string | undefined;
    variant?: string | undefined;
    targets?: ReadonlyArray<string> | undefined;
    responsiveInlinedCanvases?: boolean | undefined;
    transformDOM?: HappoTransformDOMOptions | undefined;
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
