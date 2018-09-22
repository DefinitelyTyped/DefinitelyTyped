import { ValidationContext } from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function fieldsConflictMessage(responseName: string, reason: ConflictReasonMessage): string;

/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 */
export function OverlappingFieldsCanBeMerged(context: ValidationContext): ASTVisitor;

// Field name and reason.
type ConflictReason = [string, string];

// Reason is a string, or a nested list of conflicts.
type ConflictReasonMessage = string | Array<ConflictReason>;
