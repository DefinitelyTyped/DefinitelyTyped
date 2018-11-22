// Type definitions for graphql-fields 1.3
// Project: https://github.com/robrichard/graphql-fields#readme
// Definitions by: feinoujc <https://github.com/feinoujc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { GraphQLResolveInfo } from 'graphql';

declare function graphqlFields(info: GraphQLResolveInfo, obj?: object, opts?: graphqlFields.Options): any;

declare namespace graphqlFields {
    interface Options {
        processArguments?: boolean;
        excludedFields?: string[];
    }
}

export = graphqlFields;
