// Type definitions for @keystonejs/app-nuxt 5.0
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
//                 Timothee Clain <https://github.com/tclain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/app-nuxt' {
    import { BaseApp } from '@keystonejs/keystone';

    interface NuxtOptions {
        srcDir?: string;
        buildDir?: string;
    }

    class NuxtApp extends BaseApp {
        constructor(options?: NuxtOptions);

        prepareMiddleware({ dev }: { dev?: boolean }): Promise<void>;
        build(): Promise<void>;
    }
}
