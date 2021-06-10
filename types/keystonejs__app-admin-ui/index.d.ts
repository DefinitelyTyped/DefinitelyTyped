// Type definitions for @keystonejs/app-admin-ui 5.9
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
//                 Timothee Clain <https://github.com/tclain>
//                 Abhijith Vijayan <https://github.com/abhijithvijayan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/app-admin-ui' {
    import { BaseAuthStrategy, BaseApp, Keystone } from '@keystonejs/keystone';

    interface AdminUIOptions<ListNames extends string = string, UserType extends {} = any> {
        name?: string;
        adminPath?: string;
        apiPath?: string;
        graphiqlPath?: string;
        authStrategy?: BaseAuthStrategy | null;
        hooks?: string;
        enableDefaultRoute?: boolean;
        schemaName?: string;
        isAccessAllowed?: (opts: {
            authentication: { item: UserType; listKey: ListNames };
        }) => boolean;
        adminMeta?: any;
        defaultPageSize?: number;
        maximumPageSize?: number;
    }

    interface PrepareMiddlewareOptions {
        keystone: Keystone;
        dev: boolean;
        distDir?: any; // TODO: this field is required if dev is false => thus not optional (investigate)
    }

    class AdminUIApp<ListNames extends string = string, UserType extends {} = any> extends BaseApp {
        constructor(options?: AdminUIOptions<ListNames, UserType>);

        prepareMiddleware(options: PrepareMiddlewareOptions): any; // TODO: returns Router
    }
}
