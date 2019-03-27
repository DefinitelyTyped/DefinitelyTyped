/**
 * Capture is silently ignored in ie8
 */
declare const on: (element: Element, type: string, listener: EventListener, capture?: boolean) => void;
export = on;
