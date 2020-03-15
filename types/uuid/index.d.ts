// Type definitions for uuid 7.0
// Project: https://github.com/uuidjs/uuid
// Definitions by: Oliver Hoffmann <https://github.com/iamolivinius>
//                 Felipe Ochoa <https://github.com/felipeochoa>
//                 Chris Barth <https://github.com/cjbarth>
//                 Rauno Viskus <https://github.com/rauno56>
//                 Linus Unnebäck <https://github.com/LinusU>
//                 Christoph Tavan <https://github.com/ctavan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { v1, v3, v4, v5 } from './interfaces';

interface UuidStatic {
    v1: v1;
    v3: v3;
    v4: v4;
    v5: v5;
}

declare const uuid: UuidStatic;
export = uuid;
