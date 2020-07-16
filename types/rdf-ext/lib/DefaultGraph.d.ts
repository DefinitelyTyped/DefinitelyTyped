import { DefaultGraph } from 'rdf-js';
import { PropType } from './_PropType';

interface DefaultGraphExt extends DefaultGraph {
  toCanonical(): string;
  toJSON(): {
    value: PropType<DefaultGraph, 'value'>;
    termType: PropType<DefaultGraph, 'termType'>;
  };
}

export = DefaultGraphExt;
