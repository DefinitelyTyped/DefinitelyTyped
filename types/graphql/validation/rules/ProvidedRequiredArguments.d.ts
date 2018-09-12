import { ValidationContext, SDLValidationContext } from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function missingFieldArgMessage(fieldName: string, argName: string, type: string): string;

export function missingDirectiveArgMessage(directiveName: string, argName: string, type: string): string;

/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null without a
 * default value) field arguments have been provided.
 */
export function ProvidedRequiredArguments(context: ValidationContext): ASTVisitor;

// @internal
export function ProvidedRequiredArgumentsOnDirectives(context: ValidationContext | SDLValidationContext): ASTVisitor;
