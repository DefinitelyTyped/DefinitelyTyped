import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function badValueMessage(typeName: string, valueName: string, message?: string): string;

export function requiredFieldMessage(typeName: string, fieldName: string, fieldTypeName: string): string;

export function unknownFieldMessage(typeName: string, fieldName: string, message?: string): string;

/**
 * Value literals of correct type
 *
 * A GraphQL document is only valid if all value literals are of the type
 * expected at their position.
 */
export function ValuesOfCorrectType(context: ValidationContext): ASTVisitor;
