// Type definitions for @xmpp/component-core 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/component-core
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ComponentCls = require('./lib/Component');
import xmppXml = require('@xmpp/xml');
import xmppJid = require('@xmpp/jid');

export const Component: typeof ComponentCls;
export type Component = ComponentCls;
export type SocketParameters = ComponentCls.SocketParameters;
export const xml: typeof xmppXml;
export const jid: typeof xmppJid;
