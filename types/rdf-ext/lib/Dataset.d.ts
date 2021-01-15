import Dataset = require('rdf-dataset-indexed/dataset');
import { PropType } from './_PropType';
import QuadExt = require('./Quad');

interface DatasetExt extends Dataset<QuadExt> {
  toJSON(): Array<ReturnType<PropType<QuadExt, 'toJSON'>>>;
  toCanonical(): string;
  equals(other: this): boolean;
}

export = DatasetExt;
