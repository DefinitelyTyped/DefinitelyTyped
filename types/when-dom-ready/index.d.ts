// Type definitions for when-dom-ready 1.2
// Project: https://github.com/lukechilds/when-dom-ready
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = whenDomReady;

declare function whenDomReady(document?: EventTarget): Promise<void>;
declare function whenDomReady(callback?: () => void, document?: EventTarget): Promise<void>;

declare namespace whenDomReady {
    function resume<T>(document?: EventTarget): (value: T) => Promise<T>;
}
