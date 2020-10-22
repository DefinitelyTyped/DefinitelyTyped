// Type definitions for setasap 2.0
// Project: https://github.com/taylorhakes/setAsap
// Definitions by: Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = setAsap;
export as namespace setAsap;

declare function setAsap(handler: (() => void) | string): void;
