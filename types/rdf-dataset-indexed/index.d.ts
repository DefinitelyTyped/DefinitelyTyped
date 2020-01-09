// Type definitions for rdf-dataset-indexed 0.4
// Project: https://github.com/rdf-ext/rdf-dataset-indexed
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BaseQuad, DataFactory, DatasetCore, Quad } from 'rdf-js';

declare function datasetFactory<Q extends BaseQuad = Quad>(quads?: Q[], dataFactory?: DataFactory): DatasetCore<Q>;

export = datasetFactory;
