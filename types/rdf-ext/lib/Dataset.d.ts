import Dataset from "@rdfjs/dataset/DatasetCore.js";
import { DatasetCore, Quad, Stream, Term } from "@rdfjs/types";
import { PropType } from "./_PropType.js";
import { QuadExt } from "./Quad.js";

export interface DatasetExt extends Dataset<QuadExt> {
    addAll(quads: Iterable<Quad>): this;

    clone(): DatasetExt;

    deleteMatches(...args: Parameters<DatasetCore["match"]>): this;

    difference(other: DatasetCore): DatasetExt;

    every(cb: (quad: QuadExt) => boolean): boolean;

    some(cb: (quad: QuadExt) => boolean): boolean;

    forEach(cb: (quad: QuadExt) => void): void;

    filter(cb: (quad: QuadExt) => boolean): DatasetExt;

    import(stream: Stream): Promise<this>;

    intersection(other: DatasetCore): DatasetExt;

    map(callback: (quad: QuadExt) => Quad): DatasetExt;

    match(subject?: Term | null, predicate?: Term | null, object?: Term | null, graph?: Term | null): DatasetExt;

    merge(other: Iterable<Quad>): DatasetExt;

    toJSON(): Array<ReturnType<PropType<QuadExt, "toJSON">>>;

    toCanonical(): string;

    toStream(): Stream<QuadExt>;

    equals(other: DatasetCore): boolean;

    reduce(
        callbackfn: (previousValue: QuadExt, currentValue: QuadExt, currentIndex: number, self: DatasetExt) => QuadExt,
        initialValue?: QuadExt,
    ): QuadExt;
    reduce<U>(
        callbackfn: (previousValue: U, currentValue: QuadExt, currentIndex: number, self: DatasetExt) => U,
        initialValue: U,
    ): U;
}

// tslint:disable-next-line:no-unnecessary-class
export class DatasetExt {
    constructor(quads?: Quad[]);
}

export default DatasetExt;
