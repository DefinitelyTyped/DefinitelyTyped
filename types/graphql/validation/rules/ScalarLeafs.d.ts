import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";
import { GraphQLType } from "../../type/definition";

export function noSubselectionAllowedMessage(fieldName: string, type: GraphQLType): string;

export function requiredSubselectionMessage(fieldName: string, type: GraphQLType): string;

/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */
export function ScalarLeafs(context: ValidationContext): ASTVisitor;
