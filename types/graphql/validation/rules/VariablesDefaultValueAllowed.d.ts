import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";
import { GraphQLType } from "../../type/definition";

export function defaultForRequiredVarMessage(varName: string, type: GraphQLType, guessType: GraphQLType): string;

/**
 * Variable's default value is allowed
 *
 * A GraphQL document is only valid if all variable default values are allowed
 * due to a variable not being required.
 */
export function VariablesDefaultValueAllowed(context: ValidationContext): ASTVisitor;
