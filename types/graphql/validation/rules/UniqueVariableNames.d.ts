import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function duplicateVariableMessage(variableName: string): string;

/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */
export function UniqueVariableNames(context: ValidationContext): ASTVisitor;
