// Type definitions for flatbush 3.1
// Project: https://github.com/mourner/flatbush
// Definitions by: Matt Fedderly <https://github.com/mfedderly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

type TypedArrayConstructor =
    | Int8ArrayConstructor
    | Uint8ArrayConstructor
    | Uint8ClampedArrayConstructor
    | Int16ArrayConstructor
    | Uint16ArrayConstructor
    | Int32ArrayConstructor
    | Uint32ArrayConstructor
    | Float32ArrayConstructor
    | Float64ArrayConstructor;

declare class FlatbushClass {
    /**
     * @param numItems total number of items to be indexed
     * @param nodeSize size of the tree node, experiment with different values for best performance. Default 16.
     * @param arrayType The array type used for coordinates storage. Other types may be faster in certain cases. Default Float64Array.
     */
    constructor(numItems: number, nodeSize?: number, arrayType?: TypedArrayConstructor);

    /**
     * Adds a given rectangle to the index.
     */
    add(minX: number, minY: number, maxX: number, maxY: number): void;

    /**
     * Performs indexing of the added rectangles. Their number must match the one provided when creating a Flatbush object.
     */
    finish(): void;

    /**
     * Returns an array of indices of items in a given bounding box.
     */
    search(minX: number, minY: number, maxX: number, maxY: number, filter?: (idx: number) => boolean): number[];

    /**
     * Returns an array of item indices in order of distance from the given x, y (known as K nearest neighbors, or KNN).
     */
    neighbors(
        x: number,
        y: number,
        maxResults?: number,
        maxDistance?: number,
        filter?: (idx: number) => boolean
    ): number[];

    /**
     * Recreates a Flatbush index from raw ArrayBuffer data (that's exposed as index.data on a previously indexed Flatbush instance).
     * Very useful for transferring indices between threads or storing them in a file.
     */
    static from(data: ArrayBuffer): Flatbush;

    /**
     * array buffer that holds the index
     */
    readonly data: ArrayBuffer;

    /**
     * bounding box of the data.
     */
    readonly minX: number;
    /**
     * bounding box of the data.
     */
    readonly minY: number;
    /**
     * bounding box of the data.
     */
    readonly maxX: number;
    /**
     * bounding box of the data.
     */
    readonly maxY: number;

    /**
     * number of stored items.
     */
    readonly numItems: number;
    /**
     * number of items in a node tree.
     */
    readonly nodeSize: number;
    /**
     * array type used for internal coordinates storage.
     */
    readonly ArrayType: TypedArrayConstructor;
    /**
     * array type used for internal item indices storage.
     */
    readonly IndexArrayType: TypedArrayConstructor;
}

export type Flatbush = FlatbushClass;
// tslint:disable-next-line:npm-naming https://github.com/mourner/flatbush/blob/master/index.js#L11
export default FlatbushClass;
