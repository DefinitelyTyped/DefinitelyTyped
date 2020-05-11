// Type definitions for sasl-plain 0.1
// Project: https://github.com/jaredhanson/js-sasl-plain
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Mechanism } from 'saslmechanisms';

export = PlainMechanism;

declare class PlainMechanism implements Mechanism {
    static Mechanism: typeof PlainMechanism;
    static prototype: {
        name: 'PLAIN';
        clientFirst: true;
    };

    name: 'PLAIN';
    clientFirst: true;

    response(cred: PlainMechanism.Credentials): string;

    challenge(chal: string): this;
}

declare namespace PlainMechanism {
    interface Credentials {
        authzid?: string;
        username: string;
        password: string;
    }
}
