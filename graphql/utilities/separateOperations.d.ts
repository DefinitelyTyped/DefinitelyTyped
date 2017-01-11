import {
    DocumentNode,
    OperationDefinitionNode,
} from 'graphql/language/ast';

export function separateOperations(
    documentAST: DocumentNode
): { [operationName: string]: DocumentNode }
