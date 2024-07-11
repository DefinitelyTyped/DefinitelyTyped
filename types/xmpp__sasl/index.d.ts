import { Entity } from "@xmpp/middleware";
import streamFeatures = require("@xmpp/stream-features");
import SASLFactory = require("saslmechanisms");

export = sasl;

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
declare function sasl<TEntity extends Entity>(
    {
        streamFeatures,
    }: {
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
