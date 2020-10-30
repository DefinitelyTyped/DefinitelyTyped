import { DataFactory, NamedNode, Quad, Quad_Subject, Quad_Predicate, Quad_Object, Quad_Graph } from 'rdf-js';
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

interface DataFactoryExt extends DataFactory<QuadExt, Quad> {}

// tslint:disable-next-line no-unnecessary-class
declare class DataFactoryExt  {
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
  static namedNode<Iri extends string = string>(value: Iri): NamedNodeExt<Iri>;
  static blankNode(value?: string): BlankNodeExt;
  static literal(value: string, languageOrDatatype?: string | NamedNode): LiteralExt;
  static variable(value: string): VariableExt;
  static defaultGraph(): DefaultGraphExt;
  static triple(subject: Quad_Subject, predicate: Quad_Predicate, object: Quad_Object): QuadExt;
  static quad(subject: Quad_Subject, predicate: Quad_Predicate, object: Quad_Object, graph?: Quad_Graph): QuadExt;
  static graph(quads?: any): Dataset;
  static prefixMap(prefixes: Prefixes): PrefixMap;
  static dataset(quads?: Quad[], graph?: PropType<QuadExt, 'graph'>): Dataset;
}

export = DataFactoryExt;
