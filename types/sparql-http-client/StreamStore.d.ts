import { BaseQuad, DataFactory, Quad, Stream, Term } from "@rdfjs/types";
import { Store } from "./";
import Endpoint = require("./Endpoint");

declare namespace StreamStore {
    interface StreamStoreInit<Q extends BaseQuad = Quad> {
        endpoint: Endpoint;
        factory?: DataFactory<Q> | undefined;
        maxQuadsPerRequest?: number | undefined;
    }
}

type WriteMethod = "POST" | "PUT" | "DELETE";

interface StreamStore<Q extends BaseQuad = Quad> extends Store<Q> {}

declare class StreamStore<Q extends BaseQuad = Quad> {
    constructor(options: StreamStore.StreamStoreInit<Q>);

    protected read({ graph }: { graph: Term }): Promise<Stream>;
    protected writeRequest(method: WriteMethod, graph: Term, stream: ReadableStream): Promise<void>;
}

export = StreamStore;
