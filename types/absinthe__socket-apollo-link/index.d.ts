// Type definitions for @absinthe/socket-apollo-link 0.2.1
// Project: https://github.com/absinthe-graphql/absinthe-socket/tree/master/packages/absinthe-phoenix-socket-apollo-link#readme
// Definitions by: Maarten van Vliet <https://github.com/maartenvanvliet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import { NextLink, Operation, Observable, FetchResult, ApolloLink } from '@apollo/client/core';
import { AbsintheSocket, Notifier } from '@absinthe/socket';

export interface AbsintheSocketLink extends ApolloLink {}

export function createAbsintheSocketLink(
    absintheSocket: AbsintheSocket,
    onError?: (error: Error) => any,
    onStart?: (notifier: Notifier) => any,
): AbsintheSocketLink;
