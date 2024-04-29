import BN = require("bn.js");

declare namespace bigRat {
    type Rat = [BN, BN];
}

declare function bigRat(number: number, denom?: number): bigRat.Rat;

export = bigRat;
