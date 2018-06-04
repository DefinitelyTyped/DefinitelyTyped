import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function nonInputTypeOnVarMessage(variableName: string, typeName: string): string;

/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 */
export function VariablesAreInputTypes(context: ValidationContext): ASTVisitor;
