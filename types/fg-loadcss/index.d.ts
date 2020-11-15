// Type definitions for fg-loadcss 3.1
// Project: https://github.com/filamentgroup/loadCSS
// Definitions by: Noah Overcash <https://github.com/ncovercash>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function loadCSS(href: string, before?: HTMLElement, media?: string, attributes?: Record<string, string>): HTMLLinkElement;

export function onloadCSS(stylesheet: HTMLLinkElement, callback: () => void): void;
