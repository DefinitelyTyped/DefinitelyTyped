// Type definitions for kind-of 6.0
// Project: https://github.com/jonschlinkert/kind-of
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = kind_of;

declare function kind_of(thing: undefined): 'undefined';
declare function kind_of(thing: null): 'null';
declare function kind_of(thing: boolean): 'boolean';
declare function kind_of(thing: Buffer): 'buffer';
declare function kind_of(thing: number): 'number';
declare function kind_of(thing: string): 'string';
declare function kind_of(thing: typeof arguments): 'arguments';
declare function kind_of(thing: Date): 'date';
declare function kind_of(thing: any[]): 'array';
declare function kind_of(thing: RegExp): 'regexp';
declare function kind_of(thing: Error): 'error';
// kindOf(() => {});
declare function kind_of(thing: Function): 'function';
// kindOf(function * () {});
declare function kind_of(thing: GeneratorFunction): 'generatorfunction';
declare function kind_of(thing: Symbol): 'symbol';
declare function kind_of(thing: Map<any, any>): 'map';
declare function kind_of(thing: WeakMap<any, any>): 'weakmap';
declare function kind_of(thing: Set<any>): 'set';
declare function kind_of(thing: WeakSet<any>): 'weakset';
declare function kind_of(thing: Int8Array): 'int8array';
declare function kind_of(thing: Uint8Array): 'uint8array';
declare function kind_of(thing: Uint8ClampedArray): 'uint8clampedarray';
declare function kind_of(thing: Int16Array): 'int16array';
declare function kind_of(thing: Uint16Array): 'uint16array';
declare function kind_of(thing: Int32Array): 'int32array';
declare function kind_of(thing: Uint32Array): 'uint32array';
declare function kind_of(thing: Float32Array): 'float32array';
declare function kind_of(thing: Float64Array): 'float64array';
declare function kind_of(thing: object): 'object';
declare function kind_of(thing: any): 'object';
declare function kind_of(thing: any): string;
