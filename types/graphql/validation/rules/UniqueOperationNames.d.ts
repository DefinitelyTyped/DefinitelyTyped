import { ASTValidationContext } from '../ValidationContext';
import { ASTVisitor } from '../../language/visitor';

export function duplicateOperationNameMessage(operationName: string): string;

/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 */
export function UniqueOperationNames(context: ASTValidationContext): ASTVisitor;
