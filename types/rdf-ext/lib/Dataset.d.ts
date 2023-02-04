import Dataset from '@rdfjs/dataset/DatasetCore';
import { Quad } from 'rdf-js';
import { PropType } from './_PropType';
import { QuadExt } from './Quad';

export interface DatasetExt extends Dataset<QuadExt> {
  toJSON(): Array<ReturnType<PropType<QuadExt, 'toJSON'>>>;
  toCanonical(): string;
  equals(other: this): boolean;
}

// tslint:disable-next-line:no-unnecessary-class
export  class DatasetExt {
    constructor(quads?: Quad[]);
}

export default DatasetExt;
