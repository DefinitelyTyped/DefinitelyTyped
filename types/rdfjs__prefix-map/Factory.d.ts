import { PrefixMap, PrefixMapInit } from "./PrefixMap.js";

export interface PrefixMapFactory {
    prefixMap(prefixes?: PrefixMapInit): PrefixMap;
}

interface PrefixMapFactoryCtor {
    new(): PrefixMapFactory;
    exports: ["prefixMap"];
}

declare const factory: PrefixMapFactoryCtor;
export default factory;
