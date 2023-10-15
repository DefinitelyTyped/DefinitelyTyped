// Type definitions for barnard59-core 1.0
// Project: https://github.com/zazuko/barnard59-core
// Definitions by: tpluscode <https://github.com/tpluscode>
//                 Benjamin Hofstetter <https://github.com/BenjaminHofstetter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
