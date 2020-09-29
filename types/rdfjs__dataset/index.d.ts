// Type definitions for @rdfjs/dataset 1.0
// Project: https://github.com/rdfjs-base/dataset
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BaseQuad, DataFactory, DefaultGraph, Quad } from 'rdf-js';
import DatasetCore = require('./DatasetCore');

declare const Dataset: {
    dataset<InQuad extends BaseQuad = Quad>(quads?: InQuad[]): DatasetCore<InQuad>;
    defaultGraphInstance: DefaultGraph;
} & Required<DataFactory>;

export = Dataset;
