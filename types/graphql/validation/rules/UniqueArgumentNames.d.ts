import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function duplicateArgMessage(argName: string): string;

/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 */
export function UniqueArgumentNames(context: ValidationContext): ASTVisitor;
