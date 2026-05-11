export = whenDomReady;

declare function whenDomReady(document?: EventTarget): Promise<void>;
declare function whenDomReady(callback?: () => void, document?: EventTarget): Promise<void>;

declare namespace whenDomReady {
    function resume<T>(document?: EventTarget): (value: T) => Promise<T>;
}
