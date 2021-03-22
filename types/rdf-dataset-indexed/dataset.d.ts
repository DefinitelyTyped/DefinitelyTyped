import { DatasetCore, DatasetFactory, DataFactory, Quad, BaseQuad, Stream, Term } from 'rdf-js';
import { Readable } from 'stream';

declare namespace DatasetIndexed {
    interface DatasetIndexed<Q extends BaseQuad = Quad, InQuad extends BaseQuad = Quad> extends DatasetCore<Q, InQuad> {
        create(quads: DatasetIndexed<BaseQuad, BaseQuad> | BaseQuad[]): this;
        readonly length: number;
        addAll(quads: DatasetIndexed<BaseQuad, BaseQuad> | BaseQuad[]): this;
        clone(): this;
        difference(other: this): this;
        every(predicate: (quad: Q) => boolean): boolean;
        filter(predicate: (quad: Q) => boolean): this;
        forEach(callback: (quad: Q) => void): void;
        import(stream: Stream): Promise<this>;
        includes(quad: Quad): boolean;
        intersection(other: this): this;
        map(callback: (quad: Q) => Q): this;
        merge(other: DatasetIndexed<BaseQuad, BaseQuad> | BaseQuad[]): this;
        remove(quad: BaseQuad): this;
        removeMatches(subject?: Term | null, predicate?: Term | null, object?: Term | null, graph?: Term | null): this;
        some(predicate: (quad: Q) => boolean): boolean;
        toArray(): Q[];
        toStream(): Stream<Q> & Readable;
        match(subject?: Term | null, predicate?: Term | null, object?: Term | null, graph?: Term | null): DatasetIndexed<Q, InQuad>;
    }
}

interface DatasetIndexed<Q extends BaseQuad = Quad, InQuad extends BaseQuad = Quad> extends DatasetIndexed.DatasetIndexed<Q> {}

// tslint:disable-next-line no-unnecessary-class
declare class DatasetIndexed<Q> {
    constructor(quads?: Q[], factory?: DataFactory & DatasetFactory);
}

export = DatasetIndexed;
