import { ValidationContext } from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function typeIncompatibleSpreadMessage(fragName: string, parentType: string, fragType: string): string;

export function typeIncompatibleAnonSpreadMessage(parentType: string, fragType: string): string;

/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */
export function PossibleFragmentSpreads(context: ValidationContext): ASTVisitor;
