import { Literal, NamedNode } from 'rdf-js';
import { PropType } from './_PropType';

interface LiteralExt extends Literal {
  toCanonical(): string;
  toJSON(): {
    value: PropType<Literal, 'value'>;
    termType: PropType<Literal, 'termType'>;
    language: PropType<Literal, 'language'>;
    datatype: {
      value: PropType<NamedNode, 'value'>;
      termType: PropType<NamedNode, 'termType'>;
    };
  };
}

export = LiteralExt;
