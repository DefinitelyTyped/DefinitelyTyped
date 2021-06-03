import { Socket } from 'phoenix';
import * as AbsintheSocket from '@absinthe/socket';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { ApolloLink } from '@apollo/client/link/core/ApolloLink';

function testAbsintheApolloLink(phoenixSocket: Socket): ApolloLink {
    const absintheSocket = AbsintheSocket.create(phoenixSocket);
    return createAbsintheSocketLink(
        absintheSocket,
        error => {
            // $ExpectType Error
            error;
        },
        start => {
            // $ExpectType Notifier<{}, {}>
            start;
        },
    );
}
