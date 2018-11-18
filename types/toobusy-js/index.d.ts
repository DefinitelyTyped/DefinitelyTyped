// Type definitions for toobusy-js 0.5
// Project: https://github.com/STRML/node-toobusy
// Definitions by: Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = toobusy_js;

declare function toobusy_js(): boolean;

declare namespace toobusy_js {
    function interval(newInterval: number): number;
    function lag(): number;
    function maxLag(newLag: number): number;
    function smoothingFactor(newFactor: number): number;
    function shutdown(): void;
    function onLag(fn: (lag: number) => void, threshold?: number): void;

    function started(): boolean;
}
