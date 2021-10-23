// Type definitions for pidcrypt 0.0
// Project: https://github.com/nikvdp/pidcrypt
// Definitions by: Benjamin Just <https://github.com/BamButz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace pidcrypt {
    interface pidcrypt {
        getRandomBytes(len: number): number;
    }
}

// tslint:disable-next-line:no-declare-current-package no-single-declare-module
declare module "pidcrypt" {
    let pidcrypt: pidcrypt.pidcrypt;
    export = pidcrypt;
}
