import { BlankNode, Term } from "rdf-js";
import { PropType } from './_PropType';

interface BlankNodeExt extends BlankNode {
  toCanonical(): string;
  toJSON(): {
    value: PropType<BlankNode, 'value'>;
    termType: PropType<BlankNode, 'termType'>;
  };
}

// tslint:disable-next-line:no-unnecessary-class
declare class BlankNodeExt {
    constructor(id: string);
}

export = BlankNodeExt;
