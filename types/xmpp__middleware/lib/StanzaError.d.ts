import XMPPError = require('@xmpp/error');
import { Element } from '@xmpp/xml';

export = StanzaError;

declare class StanzaError extends XMPPError<'StanzaError'> {
    type?: string | undefined;

    constructor(condition: string, text?: string, application?: Element, type?: string);
}
