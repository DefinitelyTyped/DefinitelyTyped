// Type definitions for @keystonejs/adapter-knex 5.1
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/adapter-knex' {
    import { Raw, ConnectionConfig, Config } from 'knex';
    import { BaseKeystoneAdapter } from '@keystonejs/keystone';

    interface KnexAdaptorOptions {
        knexOptions?: Config;
        schemaName?: string;
        listAdapterClass?: any;
    }
    class KnexAdapter extends BaseKeystoneAdapter {
        constructor(options?: KnexAdaptorOptions);

        disconnect(): void;
        dropDatabase(): Promise<Raw>;
    }
}
