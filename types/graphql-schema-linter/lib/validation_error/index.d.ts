import { GraphQLError, ASTNode } from 'graphql';
export class ValidationError extends GraphQLError {
  constructor(moduleName: string, message: string, nodes: ASTNode[]);
  ruleName: string;
}
