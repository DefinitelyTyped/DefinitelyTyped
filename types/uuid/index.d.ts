// Type definitions for uuid 3.4
// Project: https://github.com/kelektiv/node-uuid
// Definitions by: Oliver Hoffmann <https://github.com/iamolivinius>
//                 Felipe Ochoa <https://github.com/felipeochoa>
//                 Chris Barth <https://github.com/cjbarth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// The version number has been artificially set to 3.4, instead of 3.0,
// because of the existing uuid-js npm types package being at 3.3.28,
// meaning that `npm install @types/uuid` was installing the typings for uuid-js, not this

import { v1, v4, v5 } from './interfaces';

interface UuidStatic {
    v1: v1;
    v4: v4;
    v5: v5;
}

declare const uuid: UuidStatic & v4;
export = uuid;
