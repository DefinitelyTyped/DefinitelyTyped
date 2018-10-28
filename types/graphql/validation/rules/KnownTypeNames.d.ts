import { ValidationContext } from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function unknownTypeMessage(typeName: string, suggestedTypes: Array<string>): string;

/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 */
export function KnownTypeNames(context: ValidationContext): ASTVisitor;
