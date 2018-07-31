import Maybe from "../tsutils/Maybe";
import { DocumentNode, OperationDefinitionNode } from "../language/ast";

/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */
export function getOperationAST(
    documentAST: DocumentNode,
    operationName: Maybe<string>
): Maybe<OperationDefinitionNode>;
