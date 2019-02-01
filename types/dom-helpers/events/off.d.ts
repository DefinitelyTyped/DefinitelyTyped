/**
 * Capture is silently ignored in ie8
 */
declare const off: (element: Element, type: string, listener: EventListener, capture?: boolean) => void;
export = off;
