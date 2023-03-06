// Type definitions for jsonlint 1.6
// Project: https://github.com/zaach/jsonlint
// Definitions by: Timmatt Lee <https://github.com/Timmatt-Lee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Parse a JSON string to Typescript Object. If there is an error will print it
 * as human readible.
 *
 * Please use `import * as jsonlint from 'jsonlint';`. Instead of,
 * `import {parse} from 'jsonlint';`. Otherwise, it cannot reference to the
 * correct instance.
 */
 export function parse(str: string): Record<string, unknown>;
