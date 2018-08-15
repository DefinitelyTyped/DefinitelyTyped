import Maybe from "../../tsutils/Maybe";
import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function singleFieldOnlyMessage(name: Maybe<string>): string;

/**
 * Subscriptions must only include one field.
 *
 * A GraphQL subscription is valid only if it contains a single root field.
 */
export function SingleFieldSubscriptions(context: ValidationContext): ASTVisitor;
