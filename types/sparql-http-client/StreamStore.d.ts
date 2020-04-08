import { Store } from "./";
import { BaseQuad, Quad, DataFactory } from "rdf-js";
import Endpoint = require("./Endpoint");

declare namespace StreamStore {
    interface StreamStoreInit<Q extends BaseQuad = Quad> {
        endpoint: Endpoint;
        factor?: DataFactory<Q>;
    }
}

interface StreamStore<Q extends BaseQuad = Quad> extends Store<Q> {}

// tslint:disable-next-line no-unnecessary-class
declare class StreamStore<Q extends BaseQuad = Quad> {
    constructor(options: StreamStore.StreamStoreInit<Q>)
}

export = StreamStore;
