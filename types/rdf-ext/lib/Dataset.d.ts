import Dataset = require('rdf-dataset-indexed/dataset');
import { Quad } from 'rdf-js';
import { PropType } from './_PropType';
import QuadExt = require('./Quad');

interface DatasetExt extends Dataset<QuadExt> {
  toJSON(): Array<ReturnType<PropType<QuadExt, 'toJSON'>>>;
  toCanonical(): string;
  equals(other: this): boolean;
}

// tslint:disable-next-line:no-unnecessary-class
declare class DatasetExt {
    constructor(quads?: Quad[]);
}

export = DatasetExt;
