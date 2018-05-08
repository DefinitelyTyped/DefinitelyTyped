import { GraphQLInputType } from "../type/definition";

/**
 * Deprecated. Use coerceValue() directly for richer information.
 */
export function isValidJSValue(value: any, type: GraphQLInputType): string[];
