import { Dataset, Stream, Quad } from 'rdf-js';
import { PropType } from './_PropType';
import QuadExt = require('./Quad');
import { Readable } from 'stream';

interface DatasetExt extends Dataset<QuadExt, Quad> {
  readonly length: number;
  toJSON(): Array<ReturnType<PropType<QuadExt, 'toJSON'>>>;
  clone(): this;
  readonly includes: PropType<Dataset, 'has'>;
  merge(other: Dataset | Quad[]): this;
  removeMatches(subject: any, predicate: any, object: any, graph: any): this;
  toStream(): Stream<QuadExt> & Readable;
}

export = DatasetExt;
