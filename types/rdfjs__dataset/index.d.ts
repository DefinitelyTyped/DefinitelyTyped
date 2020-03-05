// Type definitions for @rdfjs/dataset 1.0
// Project: https://github.com/rdfjs-base/dataset
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DataFactory, DefaultGraph } from 'rdf-js';
import DatasetCore = require('./DatasetCore');

declare function dataset(): DatasetCore;

declare const Dataset: {
    dataset(): DatasetCore;
    defaultGraphInstance: DefaultGraph;
} & Required<DataFactory>;

export = Dataset;
