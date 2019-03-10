/**
 * Listens for transition end, and ensures that the handler if called
 * even if the transition fails to fire its end event.
 * Will attempt to read duration from the element, otherwise one can be provided
 */
declare const end: <T extends Element = Element>(
    element: T,
    handler: (event: { target: T, currentTarget: T }) => void,
    duration?: number
) => void;

export = end;
