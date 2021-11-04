// Type definitions for @absinthe/socket-apollo-link 0.2
// Project: https://github.com/absinthe-graphql/absinthe-socket/tree/master/packages/absinthe-phoenix-socket-apollo-link#readme
// Definitions by: Maarten van Vliet <https://github.com/maartenvanvliet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import { NextLink, Operation, Observable, FetchResult } from 'apollo-link';
import { AbsintheSocket, Notifier } from '@absinthe/socket';

export interface AbsintheSocketLink {
    request: (operation: Operation, forward: NextLink | undefined) => Observable<FetchResult> | null;
}

export function createAbsintheSocketLink(
    absintheSocket: AbsintheSocket,
    onError?: (error: Error) => any,
    onStart?: (notifier: Notifier) => any,
): AbsintheSocketLink;
