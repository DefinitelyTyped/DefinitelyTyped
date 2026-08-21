/**
 * Packs objects that have a width and a height into as small of a square as
 * possible, using a binary tree bin packing algorithm. After packing, each
 * object is given an (x, y) coordinate of where it would be optimally packed.
 * @param bins List of rectangular bins to pack
 * @param options Packing options.  Use inPlace: true to modify the bins
 *    argument in-place.
 */
declare function pack<T extends pack.Bin>(bins: T[], options?: pack.Options): pack.PackResult<T>;

declare namespace pack {
    /** Packing options. */
    interface Options {
        /** Use inPlace=true to add x,y fields to the bins argument. */
        inPlace?: boolean | undefined;
    }

    /** Specifies the dimensions of a bin to pack. */
    interface Bin {
        width: number;
        height: number;
    }

    /** Describes the location of a packed bin. */
    interface PackedItem<T> {
        /** X coordinate of the packed bin. */
        x: number;

        /** Y coordinate of the packed bin. */
        y: number;

        /** Width of the bin. */
        width: number;

        /** Height of the bin. */
        height: number;

        /** The original bin object. */
        item: T;
    }

    /** The return value from the pack function. */
    interface PackResult<T> {
        /** Width of the bounding box around all bins. */
        width: number;

        /** Height of the bounding box around all bins. */
        height: number;

        /** List of packed bins. */
        items: Array<PackedItem<T>>;
    }
}

export = pack;
