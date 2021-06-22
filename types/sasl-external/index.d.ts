// Type definitions for sasl-external 0.1
// Project: https://github.com/jaredhanson/js-sasl-external
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Mechanism } from 'saslmechanisms';

export = ExternalMechanism;

declare class ExternalMechanism implements Mechanism {
    static Mechanism: typeof ExternalMechanism;
    static prototype: {
        name: 'EXTERNAL';
        clientFirst: true;
    };

    name: 'EXTERNAL';
    clientFirst: true;

    response(cred: ExternalMechanism.Credentials): string;

    challenge(chal: string): void;
}

declare namespace ExternalMechanism {
    interface Credentials {
        authzid?: string;
    }
}
