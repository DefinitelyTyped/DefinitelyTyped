import { GraphQLSchema } from "../type/schema";
import { GraphQLType, GraphQLNamedType } from "../type/definition";

export interface Options {
    /**
     * Descriptions are defined as preceding string literals, however an older
     * experimental version of the SDL supported preceding comments as
     * descriptions. Set to true to enable this deprecated behavior.
     * This option is provided to ease adoption and will be removed in v16.
     *
     * Default: false
     */
    commentDescriptions?: boolean;
}

/**
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
export function printSchema(schema: GraphQLSchema, options?: Options): string;

export function printIntrospectionSchema(schema: GraphQLSchema, options?: Options): string;

export function printType(type: GraphQLNamedType, options?: Options): string;
