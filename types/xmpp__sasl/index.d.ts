// Type definitions for @xmpp/sasl 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/sasl
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Entity } from '@xmpp/middleware';
import streamFeatures = require('@xmpp/stream-features');
import SASLFactory = require('saslmechanisms');

export = sasl;

declare function sasl<TEntity extends Entity>(
    {
        streamFeatures,
    }: {
        // tslint:disable-next-line:no-unnecessary-generics
        streamFeatures: streamFeatures.StreamFeatures<TEntity>;
    },
    credentials: sasl.Credentials,
): sasl.SASL;

declare namespace sasl {
    type Credentials = Partial<CredentialsObj> | CredentialsFactory;

    interface CredentialsObj {
        username: string;
        password: string;
    }

    type CredentialsFactory = (
        callback: (credentials: CredentialsObj) => Promise<void>,
        mechanism: string,
    ) => Promise<void>;

    interface SASL {
        use(name: string, mechanism: SASLFactory.MechanismStatic): SASLFactory;
        use(mechanism: SASLFactory.MechanismStatic): SASLFactory;
    }
}
