// Type definitions for json-ptr 1.2
// Project: https://github.com/flitbit/json-ptr
// Definitions by: Trey Brisbane <https://github.com/treybrisbane>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

declare namespace JsonPointer {
    type PathSegments = readonly string[];

    type JsonStringPointer = string;
    type UriFragmentIdentifierPointer = string;
    type Pointer = JsonStringPointer | UriFragmentIdentifierPointer;

    interface JsonStringPointerListItem {
        readonly pointer: JsonStringPointer;
        readonly value: unknown;
    }

    interface UriFragmentIdentifierPointerListItem {
        readonly fragmentId: UriFragmentIdentifierPointer;
        readonly value: unknown;
    }

    class JsonReference {
        readonly $ref: UriFragmentIdentifierPointer;

        constructor(pointer: JsonPointer | PathSegments | Pointer);

        static isReference(value: unknown): value is JsonReference;

        resolve(target: unknown): unknown;
    }
}

declare class JsonPointer {
    static readonly JsonPointer: typeof JsonPointer;
    readonly path: JsonPointer.PathSegments;
    readonly pointer: JsonPointer.JsonStringPointer;
    readonly uriFragmentIdentifier: JsonPointer.UriFragmentIdentifierPointer;

    constructor(pointer: JsonPointer.PathSegments | JsonPointer.Pointer);

    static create(pointer: JsonPointer.PathSegments | JsonPointer.Pointer): JsonPointer;

    static has(target: unknown, pointer: JsonPointer.Pointer): boolean;

    static get(target: unknown, pointer: JsonPointer.Pointer): unknown;

    static set(target: unknown, pointer: JsonPointer.Pointer, value: unknown, force?: boolean): unknown;

    static list<FragmentId extends boolean = false>(
        target: unknown,
        fragmentId?: FragmentId,
    ): ReadonlyArray<
        FragmentId extends true
            ? JsonPointer.UriFragmentIdentifierPointerListItem
            : JsonPointer.JsonStringPointerListItem
    >;

    static flatten<FragmentId extends boolean = false>(
        target: unknown,
        fragmentId?: FragmentId,
    ): Record<FragmentId extends true ? JsonPointer.UriFragmentIdentifierPointer : JsonPointer.JsonStringPointer, unknown>;

    static map<FragmentId extends boolean = false>(
        target: unknown,
        fragmentId?: FragmentId,
    ): Map<FragmentId extends true ? JsonPointer.UriFragmentIdentifierPointer : JsonPointer.JsonStringPointer, unknown>;

    static visit<Cycle extends boolean = false>(
        target: unknown,
        visitor: (
            pointer: JsonPointer.JsonStringPointer,
            value: Cycle extends true ? unknown | JsonPointer.JsonReference : unknown,
        ) => void,
        cycle?: Cycle,
    ): void;

    static decode(pointer: JsonPointer.Pointer): JsonPointer.PathSegments;

    static decodePointer(pointer: JsonPointer.JsonStringPointer): JsonPointer.PathSegments;

    static encodePointer(path: JsonPointer.PathSegments): JsonPointer.JsonStringPointer;

    static decodeUriFragmentIdentifier(pointer: JsonPointer.UriFragmentIdentifierPointer): JsonPointer.PathSegments;

    static encodeUriFragmentIdentifier(path: JsonPointer.PathSegments): JsonPointer.UriFragmentIdentifierPointer;

    static isReference(value: unknown): value is JsonPointer.JsonReference;

    static noConflict(): typeof JsonPointer;

    has(target: unknown): boolean;

    get(target: unknown): unknown;

    set(target: unknown, value: unknown, force?: boolean): unknown;

    concat(target: JsonPointer | JsonPointer.PathSegments | JsonPointer.Pointer): JsonPointer;
}

export = JsonPointer;

export as namespace JsonPointer;
