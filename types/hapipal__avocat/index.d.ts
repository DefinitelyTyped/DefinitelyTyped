// Type definitions for @hapipal/avocat 3.0
// Project: https://github.com/hapipal/avocat#readme
// Definitions by: Tim Costa <https://github.com/timcosta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ResponseObject } from '@hapi/hapi';
import { Boom } from '@hapi/boom';

export interface Options {
    return?: boolean;
    includeMessage?: boolean;
}

// the return type has to be any because the following scenarios exist:
// 1. options.return = false - this will always throw or return false
// 2. options.return = true - this will either return false or a Boom type
// Due to scenario 2 and that behavior changes based on options, a return
// type of any is the only way I see this working
export function rethrow(err: ResponseObject | Boom, options?: Options): any;
