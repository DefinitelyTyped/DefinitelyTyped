// Type definitions for uuid 3.0
// Project: https://github.com/defunctzombie/node-uuid
// Definitions by: Oliver Hoffmann <https://github.com/iamolivinius/>
//                 Felipe Ochoa <https://github.com/felipeochoa/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { v1, v4 } from './interfaces';

interface UuidStatic {
    v1: v1;
    v4: v4;
}

declare const uuid: UuidStatic & v4;
export = uuid;
