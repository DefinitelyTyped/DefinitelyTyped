import * as stream from 'readable-stream';
import { GraphPointer } from 'clownface';
import { LoaderRegistry } from 'rdf-loaders-registry';
import { Logger } from 'winston';

// tslint:disable-next-line:no-empty-interface
export interface Variables {}

type Keys = keyof Variables extends never ? string : keyof Variables;

interface TypedMap extends Map<Keys, any> {
    // tslint:disable-next-line:no-unnecessary-generics
    get<K extends keyof Variables>(key: K): Variables[typeof key];
    // tslint:disable-next-line:no-unnecessary-generics
    set<K extends keyof Variables>(key: K, value: Variables[typeof key] | undefined): this;
}

export type VariableMap = keyof Variables extends never ? Map<string, any> : TypedMap;

export interface Context {
    logger: Logger;
    variables: VariableMap;
}

export default class StreamObject {
    basePath: string;
    children: StreamObject[];
    context: Context;
    loaderRegistry: LoaderRegistry;
    logger: Logger;
    ptr: GraphPointer;
    variables: VariableMap;
    stream?: stream.Readable | stream.Writable;
}

export {};
