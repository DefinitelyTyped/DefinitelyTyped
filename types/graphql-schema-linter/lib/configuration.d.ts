import { ValidationContext, ASTKindToNode, Visitor, GraphQLError } from 'graphql';

export type Rule = (context: ValidationContext) => Visitor<ASTKindToNode>;

export interface ConfigurationOptions {
  configDirectory?: string;
  format?: string | object;
  rules?: ReadonlyArray<string>;
  schemaPaths?: ReadonlyArray<string>;
  stdin?: boolean;
  commentDescriptions?: boolean;
  oldImplementsSyntax?: boolean;
}
export class Configuration {
  constructor(options: ConfigurationOptions, stdinFd: string | null);
  getRules(): ReadonlyArray<Rule>;
  getSchema(): string | null;
}
