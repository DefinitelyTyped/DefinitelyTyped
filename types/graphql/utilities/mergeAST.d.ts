import { DocumentNode } from "../language/ast";

/**
 * Given a document AST, merge all fragment definitions into the
 * provided operations using inline fragments.
 */

export function mergeAST(ast: DocumentNode): DocumentNode
