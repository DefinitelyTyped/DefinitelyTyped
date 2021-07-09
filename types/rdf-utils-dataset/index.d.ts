// Type definitions for rdf-utils-dataset 1.1
// Project: https://github.com/rdf-ext/rdf-utils-dataset
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DatasetIndexed } from 'rdf-dataset-indexed/dataset';
import { BaseQuad, Term } from 'rdf-js';

declare function resource<D extends DatasetIndexed<BaseQuad, BaseQuad>>(input: D, subject: Term): D;

export { resource };
