/* eslint-disable @definitelytyped/no-declare-current-package */
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "@mapbox/shelf-pack" {
    export = ShelfPack;

    class ShelfPack {
        constructor(width?: number, height?: number, options?: ShelfPack.CreateOption);

        pack(
            bins: Array<ShelfPack.RequestShort | ShelfPack.RequestLong>,
            options?: ShelfPack.PackOption,
        ): ShelfPack.Bin[];
        packOne(w: number, h: number, id?: ShelfPack.ID): ShelfPack.Bin;
        getBin(id: ShelfPack.ID): ShelfPack.Bin;
        ref(bin: ShelfPack.Bin): number;
        unref(bin: ShelfPack.Bin): number;
        clear(): void;
        resize(w: number, h: number): boolean;

        w: number;
        h: number;
    }

    namespace ShelfPack {
        class Bin {
            constructor(id: ID, x: number, y: number, w: number, h: number, maxw?: number, maxh?: number);

            id: ID;
            x: number;
            y: number;
            w: number;
            h: number;
        }

        type ID = number | string;
        interface Request {
            id?: ID | undefined;
        }
        interface RequestShort extends Request {
            w: number;
            h: number;
        }
        interface RequestLong extends Request {
            width: number;
            height: number;
        }

        interface PackOption {
            /// If true , the supplied bin objects will be updated inplace with x and y properties
            inPlace?: boolean | undefined;
        }

        interface CreateOption {
            /// If true , the sprite will automatically grow
            autoResize?: boolean | undefined;
        }
    }
}
