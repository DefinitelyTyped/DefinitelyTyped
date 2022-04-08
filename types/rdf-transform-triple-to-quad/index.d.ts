// Type definitions for rdf-transform-triple-to-quad 1.0
// Project: https://github.com/rdf-ext/rdf-transform-triple-to-quad
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Transform } from 'stream';
import { Quad_Graph, DataFactory, BaseQuad, Quad, Stream } from 'rdf-js';

declare namespace TripleToQuadTransform {
    interface TripleToQuadTransformOptions {
        factory: DataFactory;
    }
}

declare class TripleToQuadTransform<Q extends BaseQuad = Quad> extends Transform implements Stream<Q> {
    constructor(graph?: Quad_Graph, options?: TripleToQuadTransform.TripleToQuadTransformOptions);
}

export = TripleToQuadTransform;
