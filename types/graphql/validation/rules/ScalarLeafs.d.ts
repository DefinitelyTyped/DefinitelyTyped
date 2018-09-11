import { ValidationContext } from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function noSubselectionAllowedMessage(fieldName: string, type: string): string;

export function requiredSubselectionMessage(fieldName: string, type: string): string;

/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */
export function ScalarLeafs(context: ValidationContext): ASTVisitor;
