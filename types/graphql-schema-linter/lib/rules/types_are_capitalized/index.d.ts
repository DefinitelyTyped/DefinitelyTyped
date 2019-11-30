import { ValidationContext, Visitor, ASTKindToNode } from 'graphql';
export function TypesAreCapitalized(context: ValidationContext): Visitor<ASTKindToNode>;
