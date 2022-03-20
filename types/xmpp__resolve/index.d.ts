// Type definitions for @xmpp/resolve 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/resolve
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Connection = require('@xmpp/connection');

export = resolve;

declare function resolve(params: { entity: Connection }): void;
