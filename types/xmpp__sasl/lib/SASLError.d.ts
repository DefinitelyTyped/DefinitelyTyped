import XMPPError = require('@xmpp/error');

export = SASLError;

declare class SASLError extends XMPPError<'SASLError'> {}
