// Type definitions for @keystonejs/adapter-moogoose 5.1
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
//                 Timothee Clain <https://github.com/tclain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/adapter-mongoose' {
    import { BaseKeystoneAdapter } from '@keystonejs/keystone';

    interface MongooseAdaptorOptions {
        mongoUri: string;
        listAdapterClass?: any;
    }

    class MongooseAdapter extends BaseKeystoneAdapter {
        constructor(options?: MongooseAdaptorOptions);

        disconnect(): void;
        dropDatabase(): any;
    }
}
