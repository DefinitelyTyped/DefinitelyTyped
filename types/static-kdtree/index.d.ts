import ndarray = require("ndarray");

// ref: https://github.com/microsoft/TypeScript/pull/40002
type TupleOf<T, N extends number> = N extends N ? number extends N ? T[] : _TupleOf<T, N, []> : never;
type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N ? R : _TupleOf<T, N, [T, ...R]>;

type ISerialized<D extends number = number> = {
    p: Array<TupleOf<number, D>>;
    i: number[];
} | {
    d: number;
};

type TVisitor = (id: number) => any;

type TNdarray = ReturnType<typeof ndarray>;

declare class KDTree<D extends number = number> {
    readonly dimension: number;
    readonly length: number;

    constructor(points: ReturnType<typeof ndarray>, ids: number[], n: number, d: D);

    range(lo: number[], hi: number[], visit: TVisitor): number;
    rnn(point: TupleOf<number, D>, radius: number, visit: TVisitor): void;
    nn(point: TupleOf<number, D>, maxDistance?: number): number;
    knn(point: TupleOf<number, D>, maxPoints?: number, maxDistance?: number): number[];
    serialize(): ISerialized<D>;
    dispose(): void;
}

declare function createKDTree<D extends number = number>(
    points: ReadonlyArray<TupleOf<number, D>> | TNdarray,
): KDTree<D>;
declare namespace createKDTree {
    function deserialize<D extends number>(data: ISerialized<D>): KDTree<D>;
}

export = createKDTree;
