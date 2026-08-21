import Connection from "@xmpp/connection";
import { SASL2 } from "@xmpp/sasl2";
import { Element } from "@xmpp/xml";

export default function bind2(
    params: {
        sasl2: SASL2;
        entity: Connection;
    },
    tag: undefined | string | (() => Promise<string>),
): Bind2;

export interface Bind2 {
    use(ns: string, req: (element: Element) => Element, res: (element: Element) => Promise<void>): void;
}
