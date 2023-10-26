import { GraphPointer } from "clownface";
import { LoaderRegistry } from "rdf-loaders-registry";
import * as stream from "readable-stream";
import { Logger } from "winston";
import { CreatePipelineArgs } from './factory/pipeline.js';
import Pipeline from './Pipeline.js';

// tslint:disable-next-line:no-empty-interface
export interface Variables {}

type Keys = keyof Variables extends never ? string : keyof Variables;

interface TypedMap extends Map<Keys, any> {
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    get<K extends keyof Variables>(key: K): Variables[typeof key];
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    set<K extends keyof Variables>(key: K, value: Variables[typeof key] | undefined): this;
}

export type VariableMap = keyof Variables extends never ? Map<string, any> : TypedMap;

export interface Context {
    logger: Logger;
    variables: VariableMap;
    basePath: string;
    createPipeline(ptr: GraphPointer, arg?: Partial<CreatePipelineArgs>): Pipeline;
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
