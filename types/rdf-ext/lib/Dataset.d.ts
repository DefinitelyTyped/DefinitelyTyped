import { Dataset } from 'rdf-js';
import { PropType } from './_PropType';
import QuadExt = require('./Quad');

interface DatasetExt extends Dataset {
  readonly length: number;
  toJSON(): Array<ReturnType<PropType<QuadExt, 'toJSON'>>>;
  clone(): this;
  readonly includes: PropType<Dataset, 'has'>;
  merge(other: Dataset): DatasetExt;
  removeMatches(subject: any, predicate: any, object: any, graph: any): this;
}

export = DatasetExt;
