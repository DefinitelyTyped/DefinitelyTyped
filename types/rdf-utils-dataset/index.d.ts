// Type definitions for rdf-utils-dataset 1.1
// Project: https://github.com/rdf-ext/rdf-utils-dataset
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DatasetIndexed } from 'rdf-dataset-indexed/dataset'
import { BaseQuad, DatasetCore } from 'rdf-js'

type OutQuad<T> = T extends DatasetCore<infer Q, any> ? Q : never;

export function resource<D extends DatasetIndexed<BaseQuad>, Q extends OutQuad<D>>(input: D, subject: Q['subject']): D
