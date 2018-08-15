import { DocumentNode, OperationDefinitionNode } from "../language/ast";

/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */
export function separateOperations(documentAST: DocumentNode): { [key: string]: DocumentNode };
