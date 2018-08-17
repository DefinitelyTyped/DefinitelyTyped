// Type definitions for fscreen 1.0
// Project: https://github.com/rafrex/fscreen#readme
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Handler = () => void;
type RequestFullScreenFunction = (element: Element) => void;
type EventName = 'fullscreenEnabled' | 'fullscreenElement' | 'requestFullscreen' | 'exitFullscreen' | 'fullscreenchange' | 'fullscreenerror';

declare class Fscreen {
    readonly fullscreenElement: Element | undefined;
    readonly fullscreenEnabled: boolean;
    readonly exitFullscreen: Handler;
    onfullscreenchange: Handler;
    onfullscreenerror: Handler;

    addEventListener(type: EventName, handler: Handler, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: EventName, handler: Handler, options?: boolean | AddEventListenerOptions): void;
    requestFullscreen(element: Element): void;
    requestFullscreenFunction(element: Element): RequestFullScreenFunction;
}

declare const fscreen: Fscreen;
export default fscreen;
