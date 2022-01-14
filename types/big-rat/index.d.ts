// Type definitions for big-rat 1.0
// Project: https://github.com/rat-nest/big-rat/
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import BN = require('bn.js');

declare namespace bigRat {
    type Rat = [BN, BN];
}

declare function bigRat(number: number, denom?: number): bigRat.Rat;

export = bigRat;
