import { Store } from "./";
import { BaseQuad, Quad, DataFactory, Stream } from "rdf-js";
import Endpoint = require("./Endpoint");

declare namespace StreamStore {
    interface StreamStoreInit<Q extends BaseQuad = Quad> {
        endpoint: Endpoint;
        factor?: DataFactory<Q>;
    }
}

declare class StreamStore<Q extends BaseQuad = Quad> implements Store<Q> {
    constructor(options: StreamStore.StreamStoreInit<Q>)
    endpoint: Endpoint;
    get(graph: Quad['graph']): Promise<Stream<Q>>;
    post(stream: Stream): Promise<void>;
    put(stream: Stream): Promise<void>;
}

export = StreamStore;
