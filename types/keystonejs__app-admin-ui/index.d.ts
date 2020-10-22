// Type definitions for @keystonejs/app-admin-ui 5.1
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
//                 Timothee Clain <https://github.com/tclain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/app-admin-ui' {
    import { BaseAuthStrategy, BaseApp } from '@keystonejs/keystone';
    interface AdminUIOptions<ListNames extends string = string, UserType extends {} = any> {
        adminPath?: string;
        apiPath?: string;
        graphiqlPath?: string;
        pages?: any[];
        schemaName?: string;
        enableDefaultRoute?: boolean;
        authStrategy?: BaseAuthStrategy;
        isAccessAllowed?: (opts: {
            authentication: { item: UserType; list: ListNames };
        }) => boolean;
    }

    class AdminUIApp<ListNames extends string = string, UserType extends {} = any> extends BaseApp {
        constructor(options?: AdminUIOptions<ListNames, UserType>);
    }
}
