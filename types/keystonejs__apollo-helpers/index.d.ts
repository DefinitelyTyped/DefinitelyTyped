// Type definitions for @keystonejs/apollo-helpers 5.0
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
//                 Timothee Clain <https://github.com/tclain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/apollo-helpers' {
    import * as React from 'react';
    import { KeyValues } from '@keystonejs/keystone';

    interface KeystoneQueryTypeProps {
        query: string;
    }

    type KeystoneQueryType = React.ComponentType<KeystoneQueryTypeProps>;
    const Query: KeystoneQueryType;

    interface KeystoneMutationTypeProps {
        mutation: string;
        invalidatesTypes?: boolean;
    }
    type KeystoneMutationType = React.ComponentType<KeystoneMutationTypeProps>;
    const Mutation: KeystoneMutationType;

    const KeystoneProvider: React.ComponentType;

    function injectIsOptimisticFlag(opts: any): any; // TODO: insert the apollo type here
    function flattenApollo(
        opts: KeyValues<
            string,
            | React.ReactElement<KeystoneMutationTypeProps>
            | React.ReactElement<KeystoneMutationTypeProps>
        >
    ): React.ComponentType;
}
