import Maybe from "../../tsutils/Maybe";
import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function undefinedVarMessage(varName: string, opName: Maybe<string>): string;

/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 */
export function NoUndefinedVariables(context: ValidationContext): ASTVisitor;
