import xmppJid from "@xmpp/jid";
import xmppXml from "@xmpp/xml";
import ComponentCls from "./lib/Component.js";

export { SocketParameters } from "./lib/Component.js";

export const Component: typeof ComponentCls;
export type Component = ComponentCls;
export const xml: typeof xmppXml;
export const jid: typeof xmppJid;
