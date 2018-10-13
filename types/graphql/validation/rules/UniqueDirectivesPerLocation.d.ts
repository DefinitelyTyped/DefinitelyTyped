import { ASTValidationContext } from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function duplicateDirectiveMessage(directiveName: string): string;

/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all directives at a given location
 * are uniquely named.
 */
export function UniqueDirectivesPerLocation(context: ASTValidationContext): ASTVisitor;
