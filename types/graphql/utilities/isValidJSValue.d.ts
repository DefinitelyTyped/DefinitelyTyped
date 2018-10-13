import { GraphQLInputType } from "../type/definition";

/**
 * Deprecated. Use coerceValue() directly for richer information.
 *
 * This function will be removed in v15
 */
export function isValidJSValue(value: any, type: GraphQLInputType): string[];
