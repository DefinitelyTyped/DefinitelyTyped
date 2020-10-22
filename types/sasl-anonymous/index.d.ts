// Type definitions for sasl-anonymous 0.1
// Project: https://github.com/jaredhanson/js-sasl-anonymous
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Mechanism } from 'saslmechanisms';

export = AnonymousMechanism;

declare class AnonymousMechanism implements Mechanism {
    static Mechanism: typeof AnonymousMechanism;
    static prototype: {
        name: 'ANONYMOUS';
        clientFirst: true;
    };

    name: 'ANONYMOUS';
    clientFirst: true;

    response(cred: AnonymousMechanism.Credentials): string;

    challenge(chal: string): void;
}

declare namespace AnonymousMechanism {
    interface Credentials {
        trace?: string;
    }
}
