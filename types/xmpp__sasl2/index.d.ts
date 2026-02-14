import { FAST, Token } from "@xmpp/client-core/src/fast/fast.js";
import { Entity } from "@xmpp/middleware";
import { StreamFeatures } from "@xmpp/stream-features";
import { Element } from "@xmpp/xml";
import SASLFactory = require("saslmechanisms");

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export default function sasl2<TEntity extends Entity>(
    params: { streamFeatures: StreamFeatures<TEntity>; saslFactory: SASLFactory },
    onAuthenticate: CredentialsFactory<TEntity>,
): SASL2;

export interface SASL2 {
    use(ns: string, req: (element: Element) => Promise<void>, res: (element: Element) => Promise<void>): void;
    setup(params: { fast: FAST }): void;
}

export type CredentialsFactory<TEntity extends Entity> = (
    callback: (credentials: CredentialsObj, mechanism: string, userAgent: Element) => Promise<void>,
    mechanisms: string[],
    fast: FAST | null,
    entity: TEntity,
) => Promise<void>;

export interface CredentialsObj {
    username?: string;
    password?: string;
    token?: Token;
}
