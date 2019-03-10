import { ValidationContext } from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function inlineFragmentOnNonCompositeErrorMessage(type: string): string;

export function fragmentOnNonCompositeErrorMessage(fragName: string, type: string): string;

/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 */
export function FragmentsOnCompositeTypes(context: ValidationContext): ASTVisitor;
