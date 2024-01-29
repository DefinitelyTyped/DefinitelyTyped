import { BaseQuad, DataFactory, Quad, Stream } from "@rdfjs/types";
import { Readable } from "stream";
import { Query, QueryInit } from ".";

declare namespace StreamQuery {
    interface StreamQueryInit<Q extends BaseQuad = Quad> extends QueryInit {
        factory?: DataFactory<Q> | undefined;
    }

    type StreamQuery<Q extends BaseQuad = Quad> = Query<boolean, Stream<Q> & Readable, Readable, void>;
}

interface StreamQuery<Q extends BaseQuad = Quad> extends StreamQuery.StreamQuery<Q> {}

// tslint:disable-next-line no-unnecessary-class
declare class StreamQuery<Q extends BaseQuad = Quad> {
    constructor(options: StreamQuery.StreamQueryInit<Q>);
}

export = StreamQuery;
