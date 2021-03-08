import Document from "../document";
import Operation from "./operation";

/**
 * Creates an operation instance from a JSON object (parsed JSON string).
 */
export function fromJSON(json: Record<string, unknown>, document: Document): Operation;
