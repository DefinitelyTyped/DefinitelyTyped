import Connection from "@xmpp/connection";
import { Element } from "@xmpp/xml";

export default debug;

/**
 * Prints logs and debug information to the console for an entity.
 *
 * Sensitive information (authentication) is replaced with `<hidden xmlns="xmpp.js"/>`.
 *
 * @example
 * import { client } from '@xmpp/client'; // or component, ...
 * import debug = require('@xmpp/debug');
 * const xmpp = client(...);
 *
 * debug(xmpp) // requires process.env.XMPP_DEBUG
 * // or
 * debug(xmpp, true) // always enabled
 */
declare function debug(entity: Connection, force?: boolean): void;

export function hideSensitive(el: Element): Element;
