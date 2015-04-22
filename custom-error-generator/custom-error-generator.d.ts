// Type definitions for custom-error-generator 7.0.0
// Project: https://github.com/jproulx/node-custom-error
// Definitions by: Thierry Miceli <https://github.com/thmiceli>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "custom-error-generator" {
    function createError(name: string, parameters?: Object, Constructor?: any): any;
    module createError {
    }
    export = createError;
}
