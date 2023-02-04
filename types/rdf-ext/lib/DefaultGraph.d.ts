import { DefaultGraph } from 'rdf-js';
import { PropType } from './_PropType';

export interface DefaultGraphExt extends DefaultGraph {
  toCanonical(): string;
  toJSON(): {
    value: PropType<DefaultGraph, 'value'>;
    termType: PropType<DefaultGraph, 'termType'>;
  };
}

export class DefaultGraphExt {}

export default DefaultGraphExt;
