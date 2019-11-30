import { ValidationContext, ASTKindToNode, Visitor, GraphQLError } from 'graphql';

export type Rule = (context: ValidationContext) => Visitor<ASTKindToNode>;
export class Configuration {
  constructor(options: GraphqlSchemaLinter.Configuration.Options, stdinFd: string | null);
  getRules(): ReadonlyArray<Rule>;
  getSchema(): string;
}
