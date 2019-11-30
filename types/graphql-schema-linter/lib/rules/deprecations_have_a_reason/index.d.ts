import { ValidationContext, Visitor, ASTKindToNode } from 'graphql';
export function DeprecationsHaveAReason(context: ValidationContext): Visitor<ASTKindToNode>;
