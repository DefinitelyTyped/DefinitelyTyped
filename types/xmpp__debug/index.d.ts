// Type definitions for @xmpp/debug 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/debug
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Connection = require('@xmpp/connection');
import { Element } from '@xmpp/xml';

export = debug;

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

declare namespace debug {
    function hideSensitive(el: Element): Element;
}
