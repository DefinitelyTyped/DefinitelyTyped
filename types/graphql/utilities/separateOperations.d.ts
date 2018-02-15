import { DocumentNode, OperationDefinitionNode } from '../language/ast';

export function separateOperations(
  documentAST: DocumentNode,
): { [operationName: string]: DocumentNode };
