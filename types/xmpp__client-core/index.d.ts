import xmppJid from "@xmpp/jid";
import xmppXml from "@xmpp/xml";
import ClientCls from "./lib/Client.js";

export const Client: typeof ClientCls;
export type Client = ClientCls;
export const xml: typeof xmppXml;
export const jid: typeof xmppJid;
