import ClientCls = require("./lib/Client");
import xmppXml = require("@xmpp/xml");
import xmppJid = require("@xmpp/jid");

export const Client: typeof ClientCls;
export type Client = ClientCls;
export const xml: typeof xmppXml;
export const jid: typeof xmppJid;
