import { Readable } from 'readable-stream'
import { Logger } from "winston";
import LoaderRegistry = require("rdf-loaders-registry");
import Pipeline from './lib/Pipeline.js';
export { default as createPipeline } from "./lib/factory/pipeline.js";
export { default as run } from "./lib/run.js";
export { Context, VariableMap, Variables } from "./lib/StreamObject.js";

interface DefaultLogger {
    console?: boolean;
    errorFilename?: string | null;
    filename?: string | null;
    level?: "error" | "info" | "debug";
}

declare function defaultLogger(arg?: DefaultLogger): Logger;

declare const defaultLoaderRegistry: LoaderRegistry;

export { defaultLoaderRegistry, defaultLogger };

/**
 * This interface represents a pipeline loaded as step argument
 */
export interface PipelineStep extends Readable {
    pipeline: Pipeline
}
