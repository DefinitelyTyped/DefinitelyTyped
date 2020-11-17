// Type definitions for fg-loadcss 3.1
// Project: https://github.com/filamentgroup/loadCSS
// Definitions by: Noah Overcash <https://github.com/ncovercash>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace loadCSS;

declare function loadCSS(
    href: string,
    before?: HTMLElement,
    media?: string,
    attributes?: Record<string, string>,
): HTMLLinkElement;

export = loadCSS;

declare global {
    interface Window {
        onloadCSS: (stylesheet: HTMLLinkElement, callback: () => void) => void;
    }
}
