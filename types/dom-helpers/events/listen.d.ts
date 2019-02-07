/**
 * Wraps on and returns a function that calls off for you
 */
declare const listen: (element: Element, type: string, listener: EventListener, capture?: boolean) => () => void;
export = listen;
