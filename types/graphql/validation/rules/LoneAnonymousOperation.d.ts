import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function anonOperationNotAloneMessage(): string;

/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 */
export function LoneAnonymousOperation(context: ValidationContext): ASTVisitor;
