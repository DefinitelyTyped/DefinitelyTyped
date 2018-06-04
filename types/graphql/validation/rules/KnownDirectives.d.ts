import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function unknownDirectiveMessage(directiveName: string): string;

export function misplacedDirectiveMessage(directiveName: string, location: string): string;

/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 */
export function KnownDirectives(context: ValidationContext): ASTVisitor;
