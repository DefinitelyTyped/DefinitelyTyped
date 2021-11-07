import { NamedNode, Term } from "rdf-js";
import { PropType } from './_PropType';

interface NamedNodeExt<Iri extends string = string> extends NamedNode<Iri> {
  toCanonical(): string;
  toJSON(): {
    value: PropType<NamedNode, 'value'>;
    termType: PropType<NamedNode, 'termType'>;
  };
}

// tslint:disable-next-line:no-unnecessary-class
declare class NamedNodeExt<Iri extends string = string> {
    constructor(iri: Iri);
}

export = NamedNodeExt;
