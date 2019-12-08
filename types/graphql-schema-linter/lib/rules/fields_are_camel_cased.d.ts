import { ValidationContext, Visitor, ASTKindToNode } from 'graphql';
export function FieldsAreCamelCased(context: ValidationContext): Visitor<ASTKindToNode>;
