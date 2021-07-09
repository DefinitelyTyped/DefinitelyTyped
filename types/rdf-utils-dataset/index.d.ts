// Type definitions for rdf-utils-dataset 1.1
// Project: https://github.com/rdf-ext/rdf-utils-dataset
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DatasetIndexed } from 'rdf-dataset-indexed/dataset';
import { BaseQuad, DatasetCore } from 'rdf-js';

type OutQuad<T> = T extends DatasetCore<infer Q, any> ? Q : never;

declare function resource<D extends DatasetIndexed<BaseQuad>>(input: D, subject: OutQuad<D>['subject']): D;

export { resource };
