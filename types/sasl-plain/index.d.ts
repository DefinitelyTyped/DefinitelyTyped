import { Mechanism } from "saslmechanisms";

export = PlainMechanism;

declare class PlainMechanism implements Mechanism {
    static Mechanism: typeof PlainMechanism;
    static prototype: {
        name: "PLAIN";
        clientFirst: true;
    };

    name: "PLAIN";
    clientFirst: true;

    response(cred: PlainMechanism.Credentials): string;

    challenge(chal: string): this;
}

declare namespace PlainMechanism {
    interface Credentials {
        authzid?: string | undefined;
        username: string;
        password: string;
    }
}
