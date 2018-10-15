import { GraphQLError } from "../error";
import { ASTNode } from "../language/ast";
import { GraphQLInputType } from "../type/definition";

interface CoercedValue {
    readonly errors: ReadonlyArray<GraphQLError> | undefined;
    readonly value: any;
}

interface Path {
    readonly prev: Path | undefined;
    readonly key: string | number;
}

/**
 * Coerces a JavaScript value given a GraphQL Type.
 *
 * Returns either a value which is valid for the provided type or a list of
 * encountered coercion errors.
 *
 */
export function coerceValue(value: any, type: GraphQLInputType, blameNode?: ASTNode, path?: Path): CoercedValue;
