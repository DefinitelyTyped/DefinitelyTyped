// Polyfill for ES2022's .at() method on string/array prototypes, added to TypeScript in 4.6.
// TODO: these methods are not used within @types/node, and should be removed at the next
// major @types/node version; users should include the es2022 TypeScript libraries
// if they need these features.

interface RelativeIndexable<T> {
    at(index: number): T | undefined;
}

interface String extends RelativeIndexable<string> {}
interface Array<T> extends RelativeIndexable<T> {}
interface ReadonlyArray<T> extends RelativeIndexable<T> {}
interface Int8Array extends RelativeIndexable<number> {}
interface Uint8Array extends RelativeIndexable<number> {}
interface Uint8ClampedArray extends RelativeIndexable<number> {}
interface Int16Array extends RelativeIndexable<number> {}
interface Uint16Array extends RelativeIndexable<number> {}
interface Int32Array extends RelativeIndexable<number> {}
interface Uint32Array extends RelativeIndexable<number> {}
interface Float32Array extends RelativeIndexable<number> {}
interface Float64Array extends RelativeIndexable<number> {}
interface BigInt64Array extends RelativeIndexable<bigint> {}
interface BigUint64Array extends RelativeIndexable<bigint> {}
