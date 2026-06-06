import { Entity } from "@xmpp/middleware";
import streamFeatures, { StreamFeatures } from "@xmpp/stream-features";
import { Element } from "@xmpp/xml";
import SASLFactory = require("saslmechanisms");

export default sasl;

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
declare function sasl<TEntity extends Entity>(
    {
        streamFeatures,
    }: {
        streamFeatures: StreamFeatures<TEntity>;
        saslFactory: SASLFactory;
    },
    credentials: Credentials<TEntity>,
): SASL;

export type Credentials<TEntity extends Entity> = Partial<CredentialsObj> | CredentialsFactory<TEntity>;

export interface CredentialsObj {
    username: string;
    password: string;
}

export type CredentialsFactory<TEntity extends Entity> = (
    callback: (credentials: CredentialsObj) => Promise<void>,
    mechanisms: string[],
    fast: null,
    entity: TEntity,
) => Promise<void>;

export interface SASL {
    use(name: string, mechanism: SASLFactory.MechanismStatic): SASLFactory;
    use(mechanism: SASLFactory.MechanismStatic): SASLFactory;
}

export function getAvailableMechanisms(element: Element, NS: string, saslFactory: SASLFactory): string[];
