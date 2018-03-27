// Type definitions for express-graphql 0.6
// Project: https://github.com/graphql/express-graphql
// Definitions by: Isman Usoh <https://github.com/isman-usoh>
//                 Nitin Tutlani <https://github.com/nitintutlani>
//                 Daniel Fader <https://github.com/hubel>
//                 Ehsan Ziya <https://github.com/zya>
//                 Margus Lamp <https://github.com/mlamp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Request, Response } from "express";
import { DocumentNode, GraphQLSchema, GraphQLError } from 'graphql';
export = graphqlHTTP;

declare namespace graphqlHTTP {
    /**
     * Used to configure the graphQLHTTP middleware by providing a schema
     * and other configuration options.
     */
    export type Options = ((request: Request,
        response: Response,
        params?: GraphQLParams) => OptionsResult) | OptionsResult;
    export type OptionsResult = OptionsData | Promise<OptionsData>;
    export interface OptionsData {
        /**
         * A GraphQL schema from graphql-js.
         */
        schema: GraphQLSchema;

        /**
         * A value to pass as the context to the graphql() function.
         */
        context?: any;

        /**
         * An object to pass as the rootValue to the graphql() function.
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
        formatError?: (error: GraphQLError) => any;

        /**
         * An optional array of validation rules that will be applied on the document
         * in additional to those defined by the GraphQL spec.
         */
        validationRules?: any[];

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
    }

    /**
     * All information about a GraphQL request.
     */
    export interface RequestInfo {
        /**
         * The parsed GraphQL document.
         */
        document?: DocumentNode;

        /**
         * The variable values used at runtime.
         */
        variables?: { [name: string]: any };

        /**
         * The (optional) operation name requested.
         */
        operationName?: string;

        /**
         * The result of executing the operation.
         */
        result?: any;
    }

    export interface GraphQLParams {
        query?: string;
        variables?: { [name: string]: any };
        operationName?: string;
        raw?: boolean;
    }

    type Middleware = (request: Request, response: Response) => void;
}

/**
 * Middleware for express; takes an options object or function as input to
 * configure behavior, and returns an express middleware.
 */
declare function graphqlHTTP(options: graphqlHTTP.Options): graphqlHTTP.Middleware;
