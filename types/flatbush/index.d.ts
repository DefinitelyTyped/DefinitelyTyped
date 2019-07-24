// Type definitions for flatbush 3.1
// Project: https://github.com/mourner/flatbush
// Definitions by: Matt Fedderly <https://github.com/mfedderly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
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

export class Flatbush {
    /**
     * @param numItems total number of items to be indexed
     * @param nodeSize size of the tree node, experiment with different values for best performance. Default 16.
     * @param arrayType The array type used for coordinates storage. Other types may be faster in certain cases. Default Float64Array.
     */
    constructor(numItems: number, nodeSize?: number, arrayType?: TypedArrayConstructor);

    /**
     * Adds a given rectangle to the index.
     */
    public add(minX: number, minY: number, maxX: number, maxY: number): void;

    /**
     * Performs indexing of the added rectangles. Their number must match the one provided when creating a Flatbush object.
     */
    public finish(): void;

    /**
     * Returns an array of indices of items in a given bounding box.
     */
    public search(minX: number, minY: number, maxX: number, maxY: number, filter?: (idx: number) => boolean): number[];

    /**
     * Returns an array of item indices in order of distance from the given x, y (known as K nearest neighbors, or KNN).
     */
    public neighbors(
        x: number,
        y: number,
        maxResults?: number,
        maxDistance?: number,
        filter?: (idx: number) => boolean
    ): number[];

    /**
     * Recreates a Flatbush index from raw ArrayBuffer data (that's exposed as index.data on a previously indexed Flatbush instance). Very useful for transferring indices between threads or storing them in a file.
     */
    public static from(data: ArrayBuffer): Flatbush;

    /**
     * array buffer that holds the index
     */
    public readonly data: ArrayBuffer;

    /**
     * bounding box of the data.
     */
    public readonly minX: number;
    /**
     * bounding box of the data.
     */
    public readonly minY: number;
    /**
     * bounding box of the data.
     */
    public readonly maxX: number;
    /**
     * bounding box of the data.
     */
    public readonly maxY: number;

    /**
     * number of stored items.
     */
    public readonly numItems: number;
    /**
     * number of items in a node tree.
     */
    public readonly nodeSize: number;
    /**
     * array type used for internal coordinates storage.
     */
    public readonly ArrayType: TypedArrayConstructor;
    /**
     * array type used for internal item indices storage.
     */
    public readonly IndexArrayType: TypedArrayConstructor;
}

export default Flatbush;
