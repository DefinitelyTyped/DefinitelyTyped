// Type definitions for ajv-keywords 3.4
// Project: https://github.com/epoberezkin/ajv-keywords#readme
// Definitions by: Eric Gonzalez <https://github.com/lochiego>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { Ajv } from "ajv";

export { };

/**
 * Defines one or several keywords in ajv instance
 * @param  ajv validator instance
 * @param  keywords keyword(s) to define
 * @return ajv instance (for chaining)
 */
declare function defineKeywords(ajv: Ajv, keywords?: string | ReadonlyArray<string>): Ajv;

export = defineKeywords;
