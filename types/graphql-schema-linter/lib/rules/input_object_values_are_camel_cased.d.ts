import { ValidationContext, Visitor, ASTKindToNode } from 'graphql';
export function InputObjectValuesAreCamelCased(context: ValidationContext): Visitor<ASTKindToNode>;
