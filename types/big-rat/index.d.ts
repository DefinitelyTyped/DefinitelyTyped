import BN = require("bn.js");

declare namespace bigRat {
    type Rat = [BN, BN];
}

declare function bigRat(number: number | bigRat.Rat, denom?: number | bigRat.Rat): bigRat.Rat;

export = bigRat;
