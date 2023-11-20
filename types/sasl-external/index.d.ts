import { Mechanism } from "saslmechanisms";

export = ExternalMechanism;

declare class ExternalMechanism implements Mechanism {
    static Mechanism: typeof ExternalMechanism;
    static prototype: {
        name: "EXTERNAL";
        clientFirst: true;
    };

    name: "EXTERNAL";
    clientFirst: true;

    response(cred: ExternalMechanism.Credentials): string;

    challenge(chal: string): void;
}

declare namespace ExternalMechanism {
    interface Credentials {
        authzid?: string | undefined;
    }
}
