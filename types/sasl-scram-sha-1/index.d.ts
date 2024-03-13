import { Mechanism } from "saslmechanisms";

export = ScramSha1Mechanism;

declare class ScramSha1Mechanism implements Mechanism {
    static Mechanism: typeof ScramSha1Mechanism;
    static prototype: {
        name: "SCRAM-SHA-1";
        clientFirst: true;
    };

    name: "SCRAM-SHA-1";
    clientFirst: true;

    constructor(options?: ScramSha1Mechanism.Options);

    response(cred: ScramSha1Mechanism.Credentials): string;

    challenge(chal: string): this;
}

declare namespace ScramSha1Mechanism {
    interface Options {
        genNonce?: (() => number) | undefined;
    }

    interface Credentials {
        authzid?: string | undefined;
        username?: string | undefined;
        password?: string | undefined;
        salt?: string | undefined;
        saltedPassword?: string | undefined;
        clientKey?: string | undefined;
        serverKey?: string | undefined;
    }
}
