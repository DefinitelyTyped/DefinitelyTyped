// Type definitions for @xmpp/client-core 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/client-core
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ClientCls = require('./lib/Client');
import xmppXml = require('@xmpp/xml');
import xmppJid = require('@xmpp/jid');

export const Client: typeof ClientCls;
export type Client = ClientCls;
export const xml: typeof xmppXml;
export const jid: typeof xmppJid;
