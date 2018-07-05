import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function nonExecutableDefinitionMessage(defName: string): string;

/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 */
export function ExecutableDefinitions(context: ValidationContext): ASTVisitor;
