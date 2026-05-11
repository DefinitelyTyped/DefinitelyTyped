/*
  Make sure the default import and named import are compatible.
*/

import BigDefault, { Big as BigNamed } from "big.js";

function test1(b: BigDefault): BigNamed {
    return b;
}

function test2(b: BigNamed): BigDefault {
    return b;
}

function test3() {
    const b1: BigNamed = BigDefault(1);
    const b2: BigNamed = new BigDefault(1);
    const b3: BigDefault = BigNamed(1);
    const b4: BigDefault = new BigNamed(1);
}
