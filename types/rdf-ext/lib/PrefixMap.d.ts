import { Stream, NamedNode, DataFactory } from "rdf-js";

type PrefixesRecord = Record<string, NamedNode | string>;
type Prefixes = PrefixMap | PrefixesRecord;

declare class PrefixMap {
  factory: DataFactory;
  map: Record<string, NamedNode>;
  constructor(factory: DataFactory, prefixes: Prefixes);
  clone(): PrefixMap;
  addAll(prefixes: PrefixesRecord): this;
  resolve(curie: string): NamedNode;
  shrink(iri: string): NamedNode;
  import(stream: Stream): Promise<this>;
  export(stream: Stream): this;
}

export = PrefixMap;
