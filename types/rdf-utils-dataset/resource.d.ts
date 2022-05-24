import { DatasetIndexed } from 'rdf-dataset-indexed/dataset';
import { BaseQuad, Term } from 'rdf-js';

declare function resource<D extends DatasetIndexed<BaseQuad, BaseQuad>>(input: D, subject: Term): D;

export = resource;
