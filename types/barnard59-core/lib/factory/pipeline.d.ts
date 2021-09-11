import { Logger } from 'winston';
import { GraphPointer } from 'clownface';
import { LoaderRegistry } from 'rdf-loaders-registry';
import Pipeline from "../Pipeline";
import { VariableMap } from '../..';

interface CreatePipeline {
    basePath: string;
    context?: unknown;
    loaderRegistry?: LoaderRegistry;
    logger?: Logger;
    variables?: VariableMap;
}

export default function createPipeline(ptr: GraphPointer, arg?: CreatePipeline): Pipeline;
export {};
