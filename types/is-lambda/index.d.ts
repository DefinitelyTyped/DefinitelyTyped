// Type definitions for is-lambda 1.0
// Project: https://github.com/watson/is-lambda
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isLambda;

/**
 * @returns `true` if the current environment is an [AWS Lambda](https://aws.amazon.com/lambda/) server.
 *
 * @example
 * import isLambda = require('is-lambda')
 *
 * if (isLambda) {
 *   console.log('The code is running on a AWS Lambda')
 * }
 */
declare const isLambda: boolean;
