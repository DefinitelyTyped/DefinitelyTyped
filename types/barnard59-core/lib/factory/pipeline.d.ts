import { GraphPointer } from "clownface";
import { LoaderRegistry } from "rdf-loaders-registry";
import { Logger } from "winston";
import { VariableMap } from "../..";
import Pipeline from "../Pipeline";

export interface CreatePipelineArgs {
    basePath: string;
    context?: unknown;
    loaderRegistry?: LoaderRegistry;
    logger?: Logger;
    variables?: VariableMap;
}

export default function createPipeline(ptr: GraphPointer, arg?: CreatePipelineArgs): Pipeline;
export {};
