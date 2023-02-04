import { PrefixMap, PrefixMapInit } from './PrefixMap';

export interface PrefixMapFactory {
    prefixMap(prefixes?: PrefixMapInit): PrefixMap;
    exports: ['prefixMap'];
}

declare const factory: PrefixMapFactory;
export default factory;
