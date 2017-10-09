// Type definitions for express-graphql
// Project: https://www.npmjs.org/package/express-graphql
// Definitions by: Isman Usoh <https://github.com/isman-usoh>
//                 Nitin Tutlani <https://github.com/nitintutlani>
//                 Daniel Fader <https://github.com/hubel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Request, Response } from "express";

export = graphqlHTTP;

declare namespace graphqlHTTP {
    /**
     * Used to configure the graphQLHTTP middleware by providing a schema
     * and other configuration options.
     */
    export type Options = ((req: Request) => OptionsObj) | ((req: Request) => Promise<OptionsObj>) | OptionsObj
    export type OptionsObj = {
        /**
         * A GraphQL schema from graphql-js.
         */
        schema: Object,

        /**
         * A value to pass as the context to the graphql() function.
         */
        context?: Object,

        /**
         * An object to pass as the rootValue to the graphql() function.
         */
        rootValue?: Object,

        /**
         * A boolean to configure whether the output should be pretty-printed.
         */
        pretty?: boolean,

        /**
         * An optional function which will be used to format any errors produced by
         * fulfilling a GraphQL operation. If no function is provided, GraphQL's
         * default spec-compliant `formatError` function will be used.
         */
        formatError?: Function,

        /**
         * A boolean to optionally enable GraphiQL mode.
         */
        graphiql?: boolean,
    };

    type Middleware = (request: Request, response: Response) => void;
}

/**
* Middleware for express; takes an options object or function as input to
* configure behavior, and returns an express middleware.
*/
declare function graphqlHTTP(options: graphqlHTTP.Options): graphqlHTTP.Middleware;
