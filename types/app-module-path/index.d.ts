// Type definitions for app-module-path 2.2
// Project: https://github.com/patrick-steele-idem/app-module-path-node
// Definitions by: Timur Manyanov <https://github.com/darkwebdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export function addPath(path: string, parent?: any): void;

export function enableForDir(dir: string): void;

export function removePath(path: string): void;
