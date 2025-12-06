import XMPPError from "@xmpp/error";
import { Element } from "@xmpp/xml";

export default StanzaError;

declare class StanzaError extends XMPPError<"StanzaError"> {
    type?: string | undefined;

    constructor(condition: string, text?: string, application?: Element, type?: string);
}
