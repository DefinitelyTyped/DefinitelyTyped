// Type definitions for @absinthe/socket-apollo-link 0.2
// Project: https://github.com/absinthe-graphql/absinthe-socket/tree/master/packages/absinthe-phoenix-socket-apollo-link#readme
// Definitions by: Maarten van Vliet <https://github.com/maartenvanvliet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import { ApolloLink } from '@apollo/client/link/core/ApolloLink';
import { AbsintheSocket, Notifier } from '@absinthe/socket';

export function createAbsintheSocketLink(
    absintheSocket: AbsintheSocket,
    onError?: (error: Error) => any,
    onStart?: (notifier: Notifier) => any,
): ApolloLink;
