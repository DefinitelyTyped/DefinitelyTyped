// Type definitions for @xmpp/client 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/client
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Client as ClientCore, jid as xmppJid, xml as xmppXml } from '@xmpp/client-core';
import { Options as ConnectionOptions } from '@xmpp/connection';
import { IQCallee } from '@xmpp/iq/callee';
import { IQCaller } from '@xmpp/iq/caller';
import { IncomingContext, Middleware } from '@xmpp/middleware';
import { StreamFeatures } from '@xmpp/stream-features';
import { Reconnect } from '@xmpp/reconnect';
import { Resource } from '@xmpp/resource-binding';
import { Credentials, SASL } from '@xmpp/sasl';
import { StreamManagement } from '@xmpp/stream-management';
import * as koaCompose from 'koa-compose';

/**
 * An XMPP client is an entity that connects to an XMPP server.
 *
 * `@xmpp/client` package includes a minimal set of features to connect and authenticate securely and reliably.
 *
 * @example
 * import { client, xml } from "@xmpp/client";
 * import debug = require("@xmpp/debug");
 *
 * const xmpp = client({
 *   service: "ws://localhost:5280/xmpp-websocket",
 *   domain: "localhost",
 *   resource: "example",
 *   username: "username",
 *   password: "password",
 * });
 *
 * debug(xmpp, true);
 *
 * xmpp.on("error", (err) => {
 *   console.error(err);
 * });
 *
 * xmpp.on("offline", () => {
 *   console.log("offline");
 * });
 *
 * xmpp.on("stanza", async (stanza) => {
 *   if (stanza.is("message")) {
 *     await xmpp.send(xml("presence", { type: "unavailable" }));
 *     await xmpp.stop();
 *   }
 * });
 *
 * xmpp.on("online", async (address) => {
 *   // Makes itself available
 *   await xmpp.send(xml("presence"));
 *
 *   // Sends a chat message to itself
 *   const message = xml(
 *     "message",
 *     { type: "chat", to: address },
 *     xml("body", {}, "hello world"),
 *   );
 *   await xmpp.send(message);
 * });
 *
 * xmpp.start().catch(console.error);
 */
export function client(options?: Options): Client;

export interface Options extends ConnectionOptions {
    /**
     * Resource for `@xmpp/resource-binding`.
     */
    resource?: Resource | undefined;
    credentials?: Credentials | undefined;
    /**
     * Username for `@xmpp/sasl`.
     */
    username?: string | undefined;
    /**
     * Password for `@xmpp/sasl`.
     */
    password?: string | undefined;
}

export interface Client extends ClientCore {
    entity: Client;
    reconnect: Reconnect<Client>;
    middleware: Middleware<Client>;
    streamFeatures: StreamFeatures<Client>;
    iqCaller: IQCaller<Client>;
    iqCallee: IQCallee<Client>;
    starttls: koaCompose.Middleware<IncomingContext<Client>>;
    sasl: SASL;
    streamManagement: StreamManagement;
    mechanisms: Array<{ scramsha1: undefined } | { plain: undefined } | { anonymous: undefined }>;
}

export const jid: typeof xmppJid;
export const xml: typeof xmppXml;
