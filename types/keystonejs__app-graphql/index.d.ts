// Type definitions for @keystonejs/app-graphql 5.0
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
//                 Timothee Clain <https://github.com/tclain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/app-graphql' {
    import { Keystone } from '@keystonejs/keystone';

    interface GraphQLValidation {
        depthLimit: (limit: number) => any; // TODO: fetch the correct type in apollo server validations
        definitionLimit: (limit: number) => any; // TODO: fetch the correct type in apollo server validations
        fieldLimit: (limit: number) => any; // TODO: fetch the correct type in apollo server validations
    }

    interface GraphQLAppOptions {
        apiPath?: string;
        graphiqlPath?: string;
        schemaName?: string;
        apollo?: {
            validationRules?: [];
        };
    }

    interface PrepareMiddlewareOptions {
        keystone: Keystone;
        dev?: boolean;
    }

    class GraphQLApp {
        constructor(opts?: GraphQLAppOptions);

        build(): void;
        prepareMiddleware(options: PrepareMiddlewareOptions): void;
    }

    const validation: GraphQLValidation;
}
