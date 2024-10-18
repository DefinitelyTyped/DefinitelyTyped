// The version number has been artificially set to 3.4, instead of 3.0,
// because of the existing uuid-js npm types package being at 3.3.28,
// meaning that `npm install @types/uuid` was installing the typings for uuid-js, not this

import { v1, v4 } from "./interfaces";

interface UuidStatic {
    v1: v1;
    v4: v4;
}

declare const uuid: UuidStatic & v4;
export = uuid;
