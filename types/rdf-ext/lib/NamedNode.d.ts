import { NamedNode, Term } from "rdf-js";
import { PropType } from './_PropType';

interface NamedNodeExt extends NamedNode {
  toCanonical(): string;
  toJSON(): {
    value: PropType<NamedNode, 'value'>;
    termType: PropType<NamedNode, 'termType'>;
  };
}

export = NamedNodeExt;
