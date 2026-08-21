/// <reference types="node" />

import { Hmac } from "crypto";

export = createHmac;

declare function createHmac(algo: createHmac.Algorithm, key: string | Buffer): Hmac;

declare namespace createHmac {
    type Algorithm =
        | "rmd160"
        | "ripemd160"
        | "md5"
        | "sha"
        | "sha1"
        | "sha224"
        | "sha256"
        | "sha384"
        | "sha512";
}
