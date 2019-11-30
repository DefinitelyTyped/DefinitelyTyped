import { ValidationContext, Visitor, ASTKindToNode } from 'graphql';
export function DefinedTypesAreUsed(context: ValidationContext): Visitor<ASTKindToNode>;
