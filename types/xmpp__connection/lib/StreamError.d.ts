import XMPPError from "@xmpp/error";

export default StreamError;

declare class StreamError extends XMPPError<"StreamError"> {}
