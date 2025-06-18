import { BaseQuad, Quad, Quad_Graph, Stream } from "@rdfjs/types";
import SimpleClient from "./SimpleClient.js";

type HTTPMethod = "POST" | "PUT" | "DELETE";

export interface StreamStore<Q extends BaseQuad = Quad> {
    get(graph: Quad_Graph): Stream<Q>;
    post(stream: Stream, options?: { graph?: Quad_Graph }): Promise<void>;
    put(stream: Stream, options?: { graph?: Quad_Graph }): Promise<void>;
}

declare class Impl<Q extends BaseQuad = Quad> implements StreamStore<Q> {
    constructor(options: { client: SimpleClient });

    get(graph: Quad_Graph): Stream<Q>;
    post(stream: Stream, options?: { graph?: Quad_Graph }): Promise<void>;
    put(stream: Stream, options?: { graph?: Quad_Graph }): Promise<void>;

    read(options?: { graph?: Quad_Graph; method: HTTPMethod }): Stream<Q>;
    write(options?: { graph?: Quad_Graph; method: HTTPMethod; stream: Stream }): Promise<void>;
}

export default Impl;
