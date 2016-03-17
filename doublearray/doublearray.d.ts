// Type definitions for doublearray
// Project: https://github.com/takuyaa/doublearray
// Definitions by: MIZUSHIMA Junki <https://github.com/mzsm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace doublearray {
    interface KeyValue {
        k: string;
        v: number;
    }

    interface BaseAndCheck {
        getBaseBuffer(): any;   // Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array
        getCheckBuffer(): any;  // Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array
        loadBaseBuffer(base_buffer: Int8Array): BaseAndCheck;
        loadBaseBuffer(base_buffer: Int16Array): BaseAndCheck;
        loadBaseBuffer(base_buffer: Int32Array): BaseAndCheck;
        loadBaseBuffer(base_buffer: Uint8Array): BaseAndCheck;
        loadBaseBuffer(base_buffer: Uint16Array): BaseAndCheck;
        loadBaseBuffer(base_buffer: Uint32Array): BaseAndCheck;
        loadCheckBuffer(check_buffer: Int8Array): BaseAndCheck;
        loadCheckBuffer(check_buffer: Int16Array): BaseAndCheck;
        loadCheckBuffer(check_buffer: Int32Array): BaseAndCheck;
        loadCheckBuffer(check_buffer: Uint8Array): BaseAndCheck;
        loadCheckBuffer(check_buffer: Uint16Array): BaseAndCheck;
        loadCheckBuffer(check_buffer: Uint32Array): BaseAndCheck;
        size(): number;
        getBase(): number;
        getCheck(): number;
        setBase(index: number, base_value: number): void;
        setCheck(index: number, check_value: number): void;
        setFirstUnusedNode(index: number): void;
        getFirstUnusedNode(): number;
        shrink(): void;
        calc(): {all: number; unused: number;  efficiency: number};
        dump(): string;
    }

    interface DoubleArrayBuilder {
        bc: BaseAndCheck;
        keys: KeyValue[];
        append(key: string, record: number): DoubleArrayBuilder;
        build(keys?: KeyValue[], sorted?: boolean): DoubleArray;
        getChildrenInfo(position: number, start: number, length: number): Int32Array;
        setBC(parent_id: number, children_info: Int32Array, _base: number): void;
        findAllocatableBase(children_info: Int32Array): number;
        isUnusedNode(index: number): boolean;
    }

    interface DoubleArray {
        bc: BaseAndCheck;
        contain(key: string): boolean;
        lookup(key: string): number;
        commonPrefixSearch(key: string): KeyValue;
        traverse(parent: number, code: number): number;
        size(): number;
        calc(): {all: number; unused: number;  efficiency: number};
        dump(): string;
    }

    export function builder(initial_size?: number): DoubleArrayBuilder;
    // TODO: Replace to union types in the future.
    export function load(base_buffer: Int8Array, check_buffer: Int8Array): DoubleArray;
    export function load(base_buffer: Int8Array, check_buffer: Int16Array): DoubleArray;
    export function load(base_buffer: Int8Array, check_buffer: Int32Array): DoubleArray;
    export function load(base_buffer: Int8Array, check_buffer: Uint8Array): DoubleArray;
    export function load(base_buffer: Int8Array, check_buffer: Uint16Array): DoubleArray;
    export function load(base_buffer: Int8Array, check_buffer: Uint32Array): DoubleArray;
    export function load(base_buffer: Int16Array, check_buffer: Int8Array): DoubleArray;
    export function load(base_buffer: Int16Array, check_buffer: Int16Array): DoubleArray;
    export function load(base_buffer: Int16Array, check_buffer: Int32Array): DoubleArray;
    export function load(base_buffer: Int16Array, check_buffer: Uint8Array): DoubleArray;
    export function load(base_buffer: Int16Array, check_buffer: Uint16Array): DoubleArray;
    export function load(base_buffer: Int16Array, check_buffer: Uint32Array): DoubleArray;
    export function load(base_buffer: Int32Array, check_buffer: Int8Array): DoubleArray;
    export function load(base_buffer: Int32Array, check_buffer: Int16Array): DoubleArray;
    export function load(base_buffer: Int32Array, check_buffer: Int32Array): DoubleArray;
    export function load(base_buffer: Int32Array, check_buffer: Uint8Array): DoubleArray;
    export function load(base_buffer: Int32Array, check_buffer: Uint16Array): DoubleArray;
    export function load(base_buffer: Int32Array, check_buffer: Uint32Array): DoubleArray;
    export function load(base_buffer: Uint8Array, check_buffer: Int8Array): DoubleArray;
    export function load(base_buffer: Uint8Array, check_buffer: Int16Array): DoubleArray;
    export function load(base_buffer: Uint8Array, check_buffer: Int32Array): DoubleArray;
    export function load(base_buffer: Uint8Array, check_buffer: Uint8Array): DoubleArray;
    export function load(base_buffer: Uint8Array, check_buffer: Uint16Array): DoubleArray;
    export function load(base_buffer: Uint8Array, check_buffer: Uint32Array): DoubleArray;
    export function load(base_buffer: Uint16Array, check_buffer: Int8Array): DoubleArray;
    export function load(base_buffer: Uint16Array, check_buffer: Int16Array): DoubleArray;
    export function load(base_buffer: Uint16Array, check_buffer: Int32Array): DoubleArray;
    export function load(base_buffer: Uint16Array, check_buffer: Uint8Array): DoubleArray;
    export function load(base_buffer: Uint16Array, check_buffer: Uint16Array): DoubleArray;
    export function load(base_buffer: Uint16Array, check_buffer: Uint32Array): DoubleArray;
    export function load(base_buffer: Uint32Array, check_buffer: Int8Array): DoubleArray;
    export function load(base_buffer: Uint32Array, check_buffer: Int16Array): DoubleArray;
    export function load(base_buffer: Uint32Array, check_buffer: Int32Array): DoubleArray;
    export function load(base_buffer: Uint32Array, check_buffer: Uint8Array): DoubleArray;
    export function load(base_buffer: Uint32Array, check_buffer: Uint16Array): DoubleArray;
    export function load(base_buffer: Uint32Array, check_buffer: Uint32Array): DoubleArray;
}
