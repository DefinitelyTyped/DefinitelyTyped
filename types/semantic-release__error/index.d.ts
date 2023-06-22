// Type definitions for @semantic-release/error 3.0
// Project: https://github.com/semantic-release/error
// Definitions by: Alex Mendes <https://github.com/alexandermendes>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Error type used by all [semantic-release](https://github.com/semantic-release/semantic-release) packages.
 *
 * Errors of type `SemanticReleaseError` or an inherited type will be considered by
 * [semantic-release](https://github.com/semantic-release/semantic-release) as an expected exception case
 * (no release to be done, running on a PR etc..). That indicate to the `semantic-release` process to stop
 * and exit with the `0` success code.
 *
 * Any other type of error will be considered by
 * [semantic-release](https://github.com/semantic-release/semantic-release) as an unexpected error
 * (i/o issue, code problem etc...). That indicate to the `semantic-release` process to stop, log the error
 * and exit with the `1` failure code.
 *
 * @example
 * import SemanticReleaseError = require("@semantic-release/error");
 *
 * // Default
 * throw new SemanticReleaseError();
 *
 * // With error message
 * throw new SemanticReleaseError("An error happened");
 *
 * // With error message and error code
 * throw new SemanticReleaseError("An error happened", "ECODE");
 *
 * // With error message, error code and details
 * throw new SemanticReleaseError("An error happened", "ECODE", "Here is some suggestions to solve this error.");
 *
 * // With inheritance
 * class InheritedError extends SemanticReleaseError {
 *   constructor(message, code, newProperty, details) {
 *     super(message);
 *     Error.captureStackTrace(this, this.constructor);
 *     this.name = this.constructor.name;
 *     this.code = code;
 *     this.details = details;
 *     this.newProperty = "newProperty";
 *   }
 * }
 *
 * throw new InheritedError("An error happened", "ECODE", "Here is some suggestions to solve this error.");
 */
declare class SemanticReleaseError extends Error {
    name: 'SemanticReleaseError';

    code: string | undefined;

    details: string | undefined;

    semanticRelease: true;

    constructor(message?: string, code?: string, details?: string);
}

export = SemanticReleaseError;
