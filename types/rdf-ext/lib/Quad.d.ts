import { Quad, Quad_Graph, Quad_Object, Quad_Predicate, Quad_Subject } from '@rdfjs/types';
import { PropType } from './_PropType';
import { LiteralExt } from './Literal';
import { BlankNodeExt } from './BlankNode';
import { NamedNodeExt } from './NamedNode';
import { VariableExt } from './Variable';
import { DefaultGraphExt } from './DefaultGraph';

export interface QuadExt extends Quad {
  termType: 'Quad';
  value: '';
  subject: NamedNodeExt | BlankNodeExt | VariableExt;
  predicate: NamedNodeExt | VariableExt;
  object: NamedNodeExt | LiteralExt | BlankNodeExt | VariableExt;
  graph: DefaultGraphExt | NamedNodeExt | BlankNodeExt | VariableExt;
  toCanonical(): string;
  toJSON(): {
    subject: ReturnType<PropType<PropType<QuadExt, 'subject'>, 'toJSON'>>;
    predicate: ReturnType<PropType<PropType<QuadExt, 'predicate'>, 'toJSON'>>;
    object: ReturnType<PropType<PropType<QuadExt, 'object'>, 'toJSON'>>;
    graph: ReturnType<PropType<PropType<QuadExt, 'graph'>, 'toJSON'>>;
  };
}

// tslint:disable-next-line:no-unnecessary-class
export class QuadExt {
    constructor(subject: Quad_Subject, predicate: Quad_Predicate, object: Quad_Object, graph?: Quad_Graph | null);
}

export default QuadExt;
