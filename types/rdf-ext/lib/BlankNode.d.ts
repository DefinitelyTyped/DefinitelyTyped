import { BlankNode, Term } from "rdf-js";
import { PropType } from './_PropType';

interface BlankNodeExt extends BlankNode {
  toCanonical(): string;
  toJSON(): {
    value: PropType<BlankNode, 'value'>;
    termType: PropType<BlankNode, 'termType'>;
  };
}

export = BlankNodeExt;
