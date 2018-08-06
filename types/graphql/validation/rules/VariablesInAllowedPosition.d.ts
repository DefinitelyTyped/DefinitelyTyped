import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";
import { GraphQLType } from "../../type/definition";

export function badVarPosMessage(varName: string, varType: GraphQLType, expectedType: GraphQLType): string;

/**
 * Variables passed to field arguments conform to type
 */
export function VariablesInAllowedPosition(context: ValidationContext): ASTVisitor;
