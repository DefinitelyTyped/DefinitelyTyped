import { GraphQLSchema } from "../type/schema";
import { GraphQLType, GraphQLNamedType } from "../type/definition";

export interface Options {
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
