// Type definitions for sasl-digest-md5 0.1
// Project: https://github.com/jaredhanson/js-sasl-digest-md5
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Mechanism } from 'saslmechanisms';

export = DigestMd5Mechanism;

declare class DigestMd5Mechanism implements Mechanism {
    static Mechanism: typeof DigestMd5Mechanism;
    static prototype: {
        name: 'DIGEST-MD5';
        clientFirst: false;
    };

    name: 'DIGEST-MD5';
    clientFirst: false;

    constructor(options?: DigestMd5Mechanism.Options);

    response(cred: DigestMd5Mechanism.Credentials): string;

    challenge(chal: string): this;
}

declare namespace DigestMd5Mechanism {
    interface Options {
        genNonce?: () => number;
    }

    interface Credentials {
        serviceType: string;
        host: string;
        username: string;
        password: string;
        serviceName?: string;
        realm?: string;
        authzid?: string;
    }
}
