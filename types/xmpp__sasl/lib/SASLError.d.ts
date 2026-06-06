import XMPPError from "@xmpp/error";

export default SASLError;

declare class SASLError extends XMPPError<"SASLError"> {}
