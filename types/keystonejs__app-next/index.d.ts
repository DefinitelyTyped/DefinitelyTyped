// Type definitions for @keystonejs/app-next 5.1
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
//                 Timothee Clain <https://github.com/tclain>
//                 Abhijith Vijayan <https://github.com/abhijithvijayan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/app-next' {
    import { BaseApp } from '@keystonejs/keystone';

    interface NextOptions {
        dir: string;
    }

    class NextApp extends BaseApp {
        constructor(options?: NextOptions);

        prepareMiddleware({ dev, distDir }: { dev?: boolean, distDir?: any }): Promise<any>;
        build(): Promise<void>;
    }
}
