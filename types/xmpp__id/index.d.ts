// Type definitions for @xmpp/id 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/id
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = id;

/**
 * XMPP id generator for JavaScript.
 *
 * @example
 * import id = require("@xmpp/id");
 *
 * console.log(id()); // ymg806tinn
 */
declare function id(): string;
