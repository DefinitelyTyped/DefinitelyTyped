// Type definitions for fscreen 1.0
// Project: https://github.com/rafrex/fscreen#readme
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Handler = () => void;

declare class Fscreen {
    readonly fullscreenElement: Element | undefined;
    readonly fullscreenEnabled: boolean;
    readonly exitFullscreen: Handler;
    onfullscreenchange: Handler;
    onfullscreenerror: Handler;

    addEventListener(type: string, handler: Handler, useCapture?: boolean): void;
    removeEventListener(type: string, handler: Handler): void;
    requestFullscreen(element: Element): void;
    requestFullscreenFunction(element: Element): void;
}

declare const fscreen: Fscreen;
export default fscreen;
