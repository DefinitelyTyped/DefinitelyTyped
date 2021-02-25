// Type definitions for happo-cypress 1.17
// Project: https://github.com/happo/happo-cypress#readme
// Definitions by: Alexander Polyankin <https://github.com/alexanderpolyankin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ScreenshotOptions {
    component?: string;
    variant?: string;
    targets?: ReadonlyArray<string>;
    responsiveInlinedCanvases?: boolean;
    transformDOM?: TransformDOMOptions;
}

export interface TransformDOMOptions {
    selector: string;
    transform: (element: Element, document: Document) => Element;
}

export interface HideDynamicElementsOptions {
    matchers?: ReadonlyArray<RegExp>;
    defaultMatchers?: ReadonlyArray<RegExp>;
    selectors?: ReadonlyArray<string>;
    defaultSelectors?: ReadonlyArray<string>;
    replace?: boolean;
}

declare global {
    namespace Cypress {
        interface Chainable {
            happoScreenshot(options?: ScreenshotOptions): void;
            happoHideDynamicElements(options?: HideDynamicElementsOptions): void;
        }
    }
}
