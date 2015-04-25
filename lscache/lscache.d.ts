// Type definitions for lscache v1.0.2
// Project: https://github.com/pamelafox/lscache
// Definitions by: Chris Martinez <https://github.com/Chris-Martinezz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface LSCache {

    set(key: string, value: any, time?: number): void;
    get(key: string): any;
    remove(key: string): void;
}

declare var lscache: LSCache;