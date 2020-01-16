import { DataFactory, Sink, NamedNode, BaseQuad, Quad, Stream, Quad_Subject, Quad_Predicate, Quad_Object, Quad_Graph } from 'rdf-js';
import BlankNodeExt = require("./BlankNode");
import LiteralExt = require("./Literal");
import NamedNodeExt = require("./NamedNode");
import QuadExt = require("./Quad");
import PrefixMap = require("./PrefixMap");
import DefaultGraphExt = require("./DefaultGraph");
import VariableExt = require("./Variable");
import Dataset = require('./Dataset');
import { PropType } from './_PropType';

type PrefixesRecord = Record<string, NamedNode | string>;
type Prefixes = PrefixMap | PrefixesRecord;

declare class DataFactoryExt implements DataFactory {
  static defaults: {
    defaultGraph: DefaultGraphExt;
    NamedNode: NamedNodeExt;
    BlankNode: BlankNodeExt;
    Literal: LiteralExt;
    Variable: VariableExt;
    Quad: QuadExt;
    Dataset: Dataset;
    PrefixMap: typeof PrefixMap;
  };
  static factory: typeof DataFactoryExt;
  static namedNode(value: string): NamedNodeExt;
  static blankNode(value?: string): BlankNodeExt;
  static literal(value: string, languageOrDatatype?: string | NamedNode): LiteralExt;
  static variable(value: string): VariableExt;
  static defaultGraph(): DefaultGraphExt;
  static triple(subject: Quad_Subject, predicate: Quad_Predicate, object: Quad_Object): QuadExt;
  static quad(subject: Quad_Subject, predicate: Quad_Predicate, object: Quad_Object, graph?: Quad_Graph): QuadExt;
  static graph(quads?: any): Dataset;
  static prefixMap(prefixes: Prefixes): PrefixMap;
  static dataset(quads?: Quad[], graph?: PropType<QuadExt, 'graph'>): Dataset;

  blankNode(value?: string): BlankNodeExt;
  defaultGraph(): DefaultGraphExt;
  literal(value: string, languageOrDatatype?: string | NamedNode): LiteralExt;
  namedNode(value: string): NamedNode;
  // tslint:disable:no-unnecessary-generics
  quad<Q extends BaseQuad = QuadExt>(subject: Quad_Subject, predicate: Quad_Predicate, object: Quad_Object, graph?: Quad_Graph): Q;
  triple<Q extends BaseQuad = QuadExt>(subject: Quad_Subject, predicate: Quad_Predicate, object: Quad_Object): Q;
  // tslint:enable:no-unnecessary-generics
  variable(value: string): VariableExt;
}

export = DataFactoryExt;
