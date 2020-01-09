import { BaseQuad, Dataset } from 'rdf-js';
import { PropType } from './_PropType';
import QuadExt = require('./Quad');

interface DatasetExt<Q extends BaseQuad = QuadExt> extends Dataset<Q> {
  readonly length: number;
  toJSON(): Array<ReturnType<PropType<QuadExt, 'toJSON'>>>;
  clone(): this;
  readonly includes: PropType<Dataset<Q>, 'has'>;
  merge(other: Dataset<Q>): DatasetExt<Q>;
  removeMatches(subject: any, predicate: any, object: any, graph: any): this;
}

export = DatasetExt;
