import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";
import { GraphQLType } from "../../type/definition";

export function missingFieldArgMessage(fieldName: string, argName: string, type: GraphQLType): string;

export function missingDirectiveArgMessage(directiveName: string, argName: string, type: GraphQLType): string;

/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null) field arguments
 * have been provided.
 */
export function ProvidedNonNullArguments(context: ValidationContext): ASTVisitor;
