import { Mechanism } from "saslmechanisms";

export = DigestMd5Mechanism;

declare class DigestMd5Mechanism implements Mechanism {
    static Mechanism: typeof DigestMd5Mechanism;
    static prototype: {
        name: "DIGEST-MD5";
        clientFirst: false;
    };

    name: "DIGEST-MD5";
    clientFirst: false;

    constructor(options?: DigestMd5Mechanism.Options);

    response(cred: DigestMd5Mechanism.Credentials): string;

    challenge(chal: string): this;
}

declare namespace DigestMd5Mechanism {
    interface Options {
        genNonce?: (() => number) | undefined;
    }

    interface Credentials {
        serviceType: string;
        host: string;
        username: string;
        password: string;
        serviceName?: string | undefined;
        realm?: string | undefined;
        authzid?: string | undefined;
    }
}
