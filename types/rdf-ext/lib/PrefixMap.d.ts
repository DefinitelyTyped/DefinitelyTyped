import { Stream, NamedNode, DataFactory, BaseQuad } from 'rdf-js';
import QuadExt = require('./Quad');

type PrefixesRecord = Record<string, NamedNode | string>;
type Prefixes<Q extends BaseQuad = QuadExt> = PrefixMap<Q> | PrefixesRecord;

declare class PrefixMap<Q extends BaseQuad = QuadExt> {
  factory: DataFactory<Q>;
  map: Record<string, NamedNode>;
  constructor(factory: DataFactory<Q>, prefixes: Prefixes<Q>);
  clone(): PrefixMap<Q>;
  addAll(prefixes: PrefixesRecord): this;
  resolve(curie: string): NamedNode;
  shrink(iri: string): NamedNode;
  import(stream: Stream<Q>): Promise<this>;
  export(stream: Stream<Q>): this;
}

export = PrefixMap;
