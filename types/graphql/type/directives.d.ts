import Maybe from "../tsutils/Maybe";
import { GraphQLFieldConfigArgumentMap, GraphQLArgument } from "./definition";
import { DirectiveDefinitionNode } from "../language/ast";
import { DirectiveLocationEnum } from "../language/directiveLocation";

/**
 * Test if the given value is a GraphQL directive.
 */
export function isDirective(directive: any): directive is GraphQLDirective;

/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */
export class GraphQLDirective {
    name: string;
    description: Maybe<string>;
    locations: DirectiveLocationEnum[];
    args: GraphQLArgument[];
    astNode: Maybe<DirectiveDefinitionNode>;

    constructor(config: GraphQLDirectiveConfig);
}

export interface GraphQLDirectiveConfig {
    name: string;
    description?: Maybe<string>;
    locations: DirectiveLocationEnum[];
    args?: Maybe<GraphQLFieldConfigArgumentMap>;
    astNode?: Maybe<DirectiveDefinitionNode>;
}

/**
 * Used to conditionally include fields or fragments.
 */
export const GraphQLIncludeDirective: GraphQLDirective;

/**
 * Used to conditionally skip (exclude) fields or fragments.
 */
export const GraphQLSkipDirective: GraphQLDirective;

/**
 * Constant string used for default reason for a deprecation.
 */
export const DEFAULT_DEPRECATION_REASON: "No longer supported";

/**
 * Used to declare element of a GraphQL schema as deprecated.
 */
export const GraphQLDeprecatedDirective: GraphQLDirective;

/**
 * The full list of specified directives.
 */
export const specifiedDirectives: ReadonlyArray<GraphQLDirective>;

export function isSpecifiedDirective(directive: GraphQLDirective): boolean;
