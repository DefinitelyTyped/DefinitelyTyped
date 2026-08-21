/// <reference types="node" />
import { JID } from "@xmpp/jid";
import { ParsedUrlQuery } from "querystring";

/**
 * Parse XMPP URIs.
 *
 * @example
 * import * as URI from '@xmpp/uri';
 *
 * URI.parse('xmpp://guest@example.com/support@example.com/truc?message;subject=Hello%20World')
 *
 * // =>
 * // {
 * //   authority: jid('guest@example.com'), // see https://github.com/xmppjs/xmpp.js/tree/main/packages/jid
 * //   path: jid('support@example.com/truc'), // see https://github.com/xmppjs/xmpp.js/tree/main/packages/jid
 * //   query: {
 * //     type: 'message',
 * //     params: {
 * //       subject: 'Hello World',
 * //     },
 * //   },
 * // }
 */
export function parse(str: string): XMPPURI;

export interface XMPPURI {
    path: JID;
    authority?: JID;
    query?: XMPPURIQuery;
}

export interface XMPPURIQuery {
    type: string;
    params: ParsedUrlQuery;
}
