// Type definitions for @keystonejs/adapter-knex 6.3
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
//                 Abhijith Vijayan <https://github.com/abhijithvijayan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/adapter-knex' {
    import { Raw, Config } from 'knex';
    import { BaseKeystoneAdapter } from '@keystonejs/keystone';

    interface KnexAdaptorOptions {
        knexOptions?: Config;
        schemaName?: string;
        listAdapterClass?: any;
        dropDatabase?: boolean;
    }
    class KnexAdapter extends BaseKeystoneAdapter {
        constructor(options?: KnexAdaptorOptions);

        disconnect(): void;
        dropDatabase(): Promise<Raw>;
    }
}
