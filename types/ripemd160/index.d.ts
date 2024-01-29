/// <reference types="node" />

import { Hash } from "crypto";

export = RIPEMD160;

declare const RIPEMD160: RIPEMD160Static;

interface RIPEMD160Static {
    new(): Hash;
}
