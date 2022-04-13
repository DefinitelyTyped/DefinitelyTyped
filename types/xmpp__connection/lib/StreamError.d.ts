import XMPPError = require('@xmpp/error');

export = StreamError;

declare class StreamError extends XMPPError<'StreamError'> {}
