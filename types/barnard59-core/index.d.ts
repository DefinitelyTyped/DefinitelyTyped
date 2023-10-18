import { Logger } from "winston";
import LoaderRegistry = require("rdf-loaders-registry");
export { default as createPipeline } from "./lib/factory/pipeline";
export { default as run } from "./lib/run";
export { Context, VariableMap, Variables } from "./lib/StreamObject";

interface DefaultLogger {
    console?: boolean;
    errorFilename?: string | null;
    filename?: string | null;
    level?: "error" | "info" | "debug";
}

declare function defaultLogger(arg?: DefaultLogger): Logger;

declare const defaultLoaderRegistry: LoaderRegistry;

export { defaultLoaderRegistry, defaultLogger };
