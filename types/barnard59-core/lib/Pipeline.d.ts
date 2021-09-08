import { Stream } from "stream";
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

export default class Pipeline extends Stream {
    context: Context;
}

export {};
