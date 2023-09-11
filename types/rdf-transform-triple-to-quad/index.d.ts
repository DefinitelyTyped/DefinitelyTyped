// Type definitions for rdf-transform-triple-to-quad 2.0
// Project: https://github.com/rdf-ext/rdf-transform-triple-to-quad
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Transform } from 'readable-stream';
import { Quad_Graph, DataFactory, BaseQuad, Quad, Stream } from 'rdf-js';

export interface TripleToQuadTransformOptions {
    factory: DataFactory;
}

export default class TripleToQuadTransform<Q extends BaseQuad = Quad> extends Transform implements Stream<Q> {
    constructor(graph?: Quad_Graph | string, options?: TripleToQuadTransformOptions);
}
