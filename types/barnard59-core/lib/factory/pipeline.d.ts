import { Logger } from 'winston';
import { GraphPointer } from 'clownface';
import LoaderRegistry = require('rdf-loaders-registry');
import Pipeline, { VariableMap } from "../Pipeline";

interface CreatePipeline {
    basePath: string;
    context?: unknown;
    loaderRegistry?: LoaderRegistry;
    logger?: Logger;
    variables?: VariableMap;
}

export default function createPipeline(ptr: GraphPointer, arg?: CreatePipeline): Pipeline;
export {};
