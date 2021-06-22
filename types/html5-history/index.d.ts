// Type definitions for html5-history 0.1
// Project: https://github.com/Raynos/html5-history
// Definitions by: Akash Vishwakarma <https://github.com/akashishu777>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export function init(options?: any): boolean;
export function getState(friendly?: any, create?: any): any;
export function getCurrentIndex(): number;
export function getStateByIndex(index: number): any;
export function getHash(doc: any): any;
export function unescapeHash(hash: any): any;
export function normalizeHash(hash: any): any;
export function setHash(hash: any, queue: any): boolean;
