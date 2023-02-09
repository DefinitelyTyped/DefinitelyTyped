import { BlankNode, Term } from "@rdfjs/types";
import { PropType } from './_PropType';

export interface BlankNodeExt extends BlankNode {
  toCanonical(): string;
  toJSON(): {
    value: PropType<BlankNode, 'value'>;
    termType: PropType<BlankNode, 'termType'>;
  };
}

// tslint:disable-next-line:no-unnecessary-class
export class BlankNodeExt {
    constructor(id: string);
}

export default BlankNodeExt;
