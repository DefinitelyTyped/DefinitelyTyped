// Type definitions for ajv-errors 1.0
// Project: https://github.com/epoberezkin/ajv-errors
// Definitions by: Afshawn Lotfi <https://github.com/afshawnlotfi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Ajv } from "ajv";

/**
 *
 * @param ajv Ajv Main Class
 * https://github.com/epoberezkin/ajv
 * @param options Optional options for Ajv Errors
 * https://github.com/epoberezkin/ajv-errors#options
 *
 */

export = AjvErrors;
declare function AjvErrors(ajv: Ajv, options?: {}): Ajv;
