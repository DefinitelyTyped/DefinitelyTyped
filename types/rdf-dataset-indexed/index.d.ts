// Type definitions for rdf-dataset-indexed 0.4
// Project: https://github.com/rdf-ext/rdf-dataset-indexed
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BaseQuad, DataFactory } from 'rdf-js';
import DatasetIndexed = require('./dataset');

declare function datasetFactory(quads?: BaseQuad[], dataFactory?: DataFactory): DatasetIndexed;

export = datasetFactory;
