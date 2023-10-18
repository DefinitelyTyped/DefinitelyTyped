type Handler = (e?: Event) => void;
type RequestFullScreenFunction = (element: Element) => void;
type EventName =
    | "fullscreenEnabled"
    | "fullscreenElement"
    | "requestFullscreen"
    | "exitFullscreen"
    | "fullscreenchange"
    | "fullscreenerror";

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
