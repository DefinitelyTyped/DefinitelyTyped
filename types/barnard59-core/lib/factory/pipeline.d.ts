import { GraphPointer } from "clownface";
import { LoaderRegistry } from "rdf-loaders-registry";
import { Logger } from "winston";
import { VariableMap } from "../..";
import Pipeline from "../Pipeline";

interface CreatePipeline {
    basePath: string;
    context?: unknown;
    loaderRegistry?: LoaderRegistry;
    logger?: Logger;
    variables?: VariableMap;
}

export default function createPipeline(ptr: GraphPointer, arg?: CreatePipeline): Pipeline;
export {};
