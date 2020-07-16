// Type definitions for rdf-dataset-indexed 0.4
// Project: https://github.com/rdf-ext/rdf-dataset-indexed
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BaseQuad, DataFactory, DatasetCoreFactory, Quad } from 'rdf-js';
import { DatasetIndexed } from './dataset';

declare function datasetFactory<Q extends BaseQuad = Quad>(quads?: Q[], dataFactory?: DataFactory<Q> & DatasetCoreFactory<Q>): DatasetIndexed<Q>;

export = datasetFactory;
