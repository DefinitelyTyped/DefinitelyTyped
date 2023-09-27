import { DataFactory, NamedNode, Stream } from "@rdfjs/types";

export type PrefixMapInit = Array<[string, NamedNode]>;

export interface PrefixMap extends Map<string, NamedNode> {
    resolve(prefixedName: NamedNode): NamedNode;
    shrink(term: NamedNode): NamedNode;
    import(stream: Stream): Promise<this>;
    export(stream: Stream): this;
}

// tslint:disable-next-line:no-unnecessary-class
export class PrefixMap {
    constructor(prefixes?: PrefixMapInit, options?: { factory: DataFactory });
}

export default PrefixMap;
