import { BaseQuad, Quad, Quad_Graph, Stream } from "@rdfjs/types";
import SimpleClient from "./SimpleClient.js";

type HTTPMethod = "POST" | "PUT" | "DELETE";

declare class StreamStore<Q extends BaseQuad = Quad> {
    constructor(options: { client: SimpleClient });

    get(graph: Quad_Graph): Stream<Q>;
    post(stream: Stream, options?: { graph?: Quad_Graph }): Promise<void>;
    put(stream: Stream, options?: { graph?: Quad_Graph }): Promise<void>;

    read(options?: { graph?: Quad_Graph; method: HTTPMethod }): Stream<Q>;
    write(options?: { graph?: Quad_Graph; method: HTTPMethod; stream: Stream }): Promise<void>;
}

export default StreamStore;
