import {  Quad } from 'rdf-js';
import { PropType } from './_PropType';
import LiteralExt = require('./Literal');
import BlankNodeExt = require('./BlankNode');
import NamedNodeExt = require('./NamedNode');
import VariableExt = require('./Variable');
import DefaultGraphExt = require('./DefaultGraph');

interface QuadExt extends Quad {
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

export = QuadExt;
