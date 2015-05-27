// Type definitions for BigScreen 2.0.4
// Project: http://brad.is/coding/BigScreen/
// Definitions by: Douglas Eichelberger <https://github.com/dduugg/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface BigScreenStatic {
    // Properties
    element: Element;
    enabled: boolean;

    // Methods
    exit(): void;
    onchange(element: Element): void;
    onenter(element: Element): void;
    onerror(element: Element, reason: string): void;
    onexit(): void;
    request(element: Element, onEnter?: (element: Element) => void, onExit?: () => void, onError?: (element: Element, reason: string) => void): void;
    toggle(element: Element, onEnter?: (element: Element) => void, onExit?: () => void, onError?: (element: Element, reason: string) => void): void;
    videoEnabled(video: HTMLVideoElement): boolean;
}

declare var bigscreen: BigScreenStatic;

declare module "bigscreen" {
    export = bigscreen;
}
