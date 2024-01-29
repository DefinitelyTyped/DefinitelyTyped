import ComponentCls = require("./lib/Component");
import xmppXml = require("@xmpp/xml");
import xmppJid = require("@xmpp/jid");

export const Component: typeof ComponentCls;
export type Component = ComponentCls;
export type SocketParameters = ComponentCls.SocketParameters;
export const xml: typeof xmppXml;
export const jid: typeof xmppJid;
