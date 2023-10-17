import { BaseQuad, DataFactory, Quad, Quad_Graph, Stream } from "rdf-js";
import { Transform } from "readable-stream";

export interface TripleToQuadTransformOptions {
    factory: DataFactory;
}

export default class TripleToQuadTransform<Q extends BaseQuad = Quad> extends Transform implements Stream<Q> {
    constructor(graph?: Quad_Graph | string, options?: TripleToQuadTransformOptions);
}
