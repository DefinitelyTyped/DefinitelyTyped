// Type definitions for koa-graphql 0.8
// Project: https://github.com/chentsulin/koa-graphql
// Definitions by: Matheus Gonçalves da Silva <https://github.com/PlayMa256>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0
/// <reference types="node" />

import { Context, Request, Response, Middleware } from 'koa';
import { GraphQLError, GraphQLSchema, GraphQLFieldResolver, ValidationContext, ASTVisitor } from 'graphql';
import { RequestInfo } from 'express-graphql';

export = graphqlHTTP;

declare function graphqlHTTP(options: graphqlHTTP.Options): Middleware;

declare namespace graphqlHTTP {
    type Options = ((request: Request, response: Response, ctx: Context) => OptionsResult) | OptionsResult;

    type OptionsResult = OptionsData | Promise<OptionsData>;

    interface OptionsData {
        /**
         * A GraphQL schema from graphql-js.
         */
        schema: GraphQLSchema;

        /**
         * A value to pass as the context to this middleware.
         */
        context?: any;

        /**
         * An object to pass as the rootvalue to the graphql() function.
         */
        rootValue?: any;

        /**
         * A boolean to configure whether the output should be pretty-printed.
         */
        pretty?: boolean;

        /**
         * An optional function which will be used to format any errors produced by
         * fulfilling a GraphQL operation. If no function is provided, GraphQL's
         * default spec-compliant `formatError` function will be used.
         */
        formatError?: (error: GraphQLError, context?: any) => any;

        /**
         * An optional array of validation rules that will be applied on the document
         * in addition to those defined by the GraphQL spec.
         */
        validationRules?: Array<(arg0: ValidationContext) => ASTVisitor>;

        /**
         * An optional function for adding additional metadata to the GraphQL response
         * as a key-value object. The result will be added to "extensions" field in
         * the resulting JSON. This is often a useful place to add development time
         * info such as the runtime of a query or the amount of resources consumed.
         *
         * Information about the request is provided to be used.
         *
         * This function may be async.
         */
        extensions?: (info: RequestInfo) => { [key: string]: any };

        /**
         * A boolean to optionally enable GraphiQL mode.
         */
        graphiql?: boolean;

        /**
         * A resolver function to use when one is not provided by the schema.
         * If not provided, the default field resolver is used (which looks for a
         * value or method on the source value with the field's name).
         */
        fieldResolver?: GraphQLFieldResolver<any, any>;
    }
}
