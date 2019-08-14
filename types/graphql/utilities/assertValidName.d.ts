import { GraphQLError } from "../error/GraphQLError";
import { ASTNode } from "../language/ast";

/**
 * Upholds the spec rules about naming.
 */
export function assertValidName(name: string): string;

/**
 * Returns an Error if a name is invalid.
 */
export function isValidNameError(name: string, node?: ASTNode | undefined): GraphQLError | undefined;
